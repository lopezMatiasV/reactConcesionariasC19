import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ContentRowAutos = () => {
	const [autos, setData] = useState(null);

	useEffect(() => {
		api();
	});

	const api = async () => {
		const dataAutos = await fetch("http://localhost:8000/apis/autos");
		const autos = await dataAutos.json();
		setData(autos);
		console.log(autos);
	};

	return (
		<div className="col-md-4 mb-4">
			<div className="card border-left-primary shadow h-100 py-2">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
								<Link to="/autos" className="Link">Total de Autos</Link>
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">
								{autos?.autos.length}
							</div>
						</div>
						<div className="col-auto">
							<i className="fas fa-film fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
