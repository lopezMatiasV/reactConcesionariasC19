import { Link } from "react-router-dom"
export const NavItemDashboard = () => {
    return (
        <>
            <li class="nav-item active">
				<Link class="nav-link" href="/">
					{/* <i class="fas fa-fw fa-tachometer-alt"></i> */}
					<span>Dashboard - Concesionarias</span></Link>
			</li>
        </>
    )
}