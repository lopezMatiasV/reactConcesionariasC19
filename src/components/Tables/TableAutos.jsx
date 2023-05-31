import { useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'

function TableAutos() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/apis/autos")
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
					<th>Marca</th>
					<th>Modelo</th>
					<th>Año</th>
					<th>Ver</th>
					<th>Editar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
                {data?.autos.map(({id, marca, modelo, anio }) => (
                    <tr>
                        <td key={id}>{id}</td>
                        <td key={marca}>{marca}</td>
                        <td key={modelo}>{modelo}</td>
                        <td key={anio}>{anio}</td>
                        <td>< FaEye /></td>
					              <td><FaPen /></td>
					              <td><FaTrash /></td>
                    </tr>
                ))}
			</tbody>
		</Table>
	);
}

export default TableAutos;