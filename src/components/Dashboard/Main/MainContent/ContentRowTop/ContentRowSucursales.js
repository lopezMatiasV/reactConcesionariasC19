import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "http://localhost:8000/apis/sucursales";

export const ContentRowSucursales = () => {
    const [data, setData] = useState(null);

	useEffect(() => {
		api();
	});

	const api = async () => {
		const result = await fetch(url);
		const data = await result.json();
		setData(data);
	};
	return (
		<div className="col-md-4 mb-4">
			<div className="card border-left-success shadow h-100 py-2">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-success text-uppercase mb-1">
							<Link to="/sucursales" className="Link">Total de sucursales</Link>
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{data?.sucursales.length}</div>
						</div>
						<div className="col-auto">
							<i className="fas fa-award fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
