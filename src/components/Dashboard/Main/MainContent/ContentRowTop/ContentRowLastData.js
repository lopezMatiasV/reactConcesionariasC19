import { useState, useEffect } from "react";

export const ContentRowLastData = () => {
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
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">
                        {`${autos?.autos[autos.autos.length - 1].marca} ${autos?.autos[autos.autos.length - 1].modelo}`}
					</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							src={`/images/${autos?.autos[autos.autos.length - 10].imagenes[0].file}`}
							alt={`imagen auto ${autos?.autos[autos.autos.length - 1].id}`}
						/>
					</div>
					<p>
                        Lo encontras en la Sucursal	{autos?.autos[autos.autos.length - 1].sucursal.nombre}
					</p>
					<button
						className="btn btn-danger"
						target="_blank"
						rel="nofollow"
						href="/"
					>
						Ver mas detalles
					</button>
				</div>
			</div>
		</div>
	);
};
