import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "http://localhost:8000/apis/users";

export const ContentRowUsuarios = () => {
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
			<div className="card border-left-warning shadow h-100 py-2">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
							<Link to="/usuarios" className="Link">Total de Usuarios</Link>
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{data?.users.length}</div>
						</div>
						<div className="col-auto">
							<i className="fas fa-user fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
