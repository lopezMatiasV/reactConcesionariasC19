import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavItemPages = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/apis/sucursales")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}, []);
	return (
		<>
            <div className="sidebar-heading">Actions</div>
			{data?.sucursales.map(({ id, nombre }) => (
				<li className="nav-item">
					<Link to={`/sucursales/${id}`} className="Link nav-link collapsed">
						<i className="fas fa-fw fa-chart-area"></i>
						{nombre}
					</Link>
				</li>
			))}
		</>
	);
};
