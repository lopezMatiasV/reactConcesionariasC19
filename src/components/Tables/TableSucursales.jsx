import { useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'

function TableSucursales() {
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
		<Table striped bordered hover className="Table">
			<thead>
				<tr>
					<th>Id</th>
					<th>Nombre</th>
					<th>Ver</th>
					<th>Editar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
                {data?.sucursales.map(({id, nombre }) => (
                    <tr>
                        <td key={id}>{nombre}</td>
                        <td key={nombre}>{nombre}</td>
                        <td>< FaEye /></td>
					    <td><FaPen /></td>
					    <td><FaTrash /></td>
                    </tr>
                ))}
			</tbody>
		</Table>
	);
}

export default TableSucursales;
