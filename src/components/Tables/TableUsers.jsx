import { useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import { FaPen, FaTrash } from 'react-icons/fa'

function TableUsers() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/apis/users")
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
					<th>Nombre y Apellido</th>
					<th>Rol</th>
					<th>Editar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
                {data?.users.map(({id, nombre, apellido, rol }) => (
                    <tr>
                        <td key={id}>{nombre}</td>
                        <td key={nombre}>{nombre + ' ' + apellido}</td>
                        <td key={rol}>{rol}</td>
					    <td><FaPen /></td>
					    <td><FaTrash /></td>
                    </tr>
                ))}
			</tbody>
		</Table>
	);
}

export default TableUsers;