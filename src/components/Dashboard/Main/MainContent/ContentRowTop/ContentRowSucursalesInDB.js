import { useState, useEffect } from "react";

export const ContentRowSucursalesInDb = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		api();
	});

	const api = async () => {
		const result = await fetch("http://localhost:8000/apis/sucursales");
		const data = await result.json();
		setData(data);
		console.log(data);
	};
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">
						Sucursales in Data Base
					</h5>
				</div>
				<div className="card-body">
					<div className="row">
                        {data?.sucursales.map(({id, nombre }) => (
                            <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">{nombre}</div>
                            </div>
                        </div>
                        ))}
					</div>
				</div>
			</div>
		</div>
	);
};
