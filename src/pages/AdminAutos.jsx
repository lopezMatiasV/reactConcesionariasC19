import TableAutos from '../components/Tables/TableAutos';
import { Button } from 'react-bootstrap';

export const AdminAutos = () => {
    return (
        <>
            <Button variant="success">Agregar</Button>
            <TableAutos />
        </>
    )
}
