import { ContentRowAutos } from "./ContentRowAutos";
import { ContentRowLastData } from "./ContentRowLastData";
import { ContentRowSucursales } from "./ContentRowSucursales";
import { ContentRowSucursalesInDb } from "./ContentRowSucursalesInDB";
import { ContentRowUsuarios } from "./ContentRowUsuarios";

export const ContentRowTop = () => {

	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			{/*<!-- Content Row Movies-->*/}
			<div className="row">
				<ContentRowAutos />
				<ContentRowSucursales />
				<ContentRowUsuarios />
			</div>
			{/*<!-- End movies in Data Base -->*/}

			{/*<!-- Content Row Last Movie in Data Base -->*/}
			<div className="row">
				{/*<!-- Last Movie in DB -->*/}
				<ContentRowLastData />
				{/*<!-- End content row last movie in Data Base -->*/}

				{/*<!-- Genres in DB -->*/}
				<ContentRowSucursalesInDb />
			</div>
		</div>
	);
};
