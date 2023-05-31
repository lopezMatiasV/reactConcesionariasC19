import { useState, useEffect} from 'react';
import { CardSucursales } from '../components/Card/CardSucursales'

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
        <div>
            {data?.sucursales.map(({id, nombre }) => (
                <CardSucursales />
            ))}
        </div>
	);
}

export default TableSucursales;
