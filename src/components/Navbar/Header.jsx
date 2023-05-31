import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
	Link
} from "react-router-dom";

export const Header = () => {
	return (
		<>
				<Navbar bg="light" expand="lg">
					<Container fluid>
						<Navbar.Brand ><Link to="/" className="Link">Concesionarias</Link></Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
								<Nav.Link><Link to="/sucursales" className="Link">Sucursales</Link></Nav.Link>
								<Nav.Link ><Link to="/autos" className="Link">Autos</Link></Nav.Link>
								<Nav.Link ><Link to="/usuarios" className="Link">Usuarios</Link></Nav.Link>
								<Nav.Link ><Link to="/dashboard" className="Link">Dashboard</Link></Nav.Link>
							</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Buscar"
									className="me-2"
									aria-label="Search"/>
								<Button variant="outline-success">Buscar</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
		</>
	);
}
