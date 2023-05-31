import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CardSucursales() {
	const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/apis/sucursales")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <div className="Card">
            {data?.sucursales.map(({id, nombre, imagen, direccion, telefono }) => (
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`/images/${imagen}`} />
                    <Card.Body>
                        <Card.Title>{ nombre }</Card.Title>
                        <Card.Text>
                            <p>Dirección: { direccion }</p>
                            <p>Teléfono: { telefono }</p>
                        </Card.Text>
                        <Link to={`/sucursales/${id}`}>
                            <Button variant="primary">Ir a la sucursal</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>		
	);
}

export default CardSucursales;
