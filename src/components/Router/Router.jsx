import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "../../pages/Home";
import { AdminSucursales } from "../../pages/AdminSucursales";
import { AdminAutos } from "../../pages/AdminAutos";
import { AdminUsers } from "../../pages/AdminUsers";
import { Header } from "../Navbar/Header";
import { Dashboard } from "../../pages/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RouterPages = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sucursales" element={<AdminSucursales />} />
					<Route path="/autos" element={<AdminAutos />} />
					<Route path="/usuarios" element={<AdminUsers />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
};
