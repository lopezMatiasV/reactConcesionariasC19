import TableSucursales from '../components/Tables/TableSucursales';
import { Button } from 'react-bootstrap';

export const AdminSucursales = () => {
    return (
        <>
            <Button variant="success">Agregar</Button>
            <TableSucursales />
        </>
    )
}
