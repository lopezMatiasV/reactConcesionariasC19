import { SidebarBrand } from "./SidebarBrand";
import { NavItemDashboard } from "./NavItemDashboard";
import { NavItemPages } from "./NavItemPages";

export const Sidebar = () => {
	return (
		<ul
			className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
			id="accordionSidebar"
		>
			<SidebarBrand />
			<hr className="sidebar-divider my-0" />
			<NavItemDashboard />
			<hr className="sidebar-divider" />
			{/*<!-- Nav Item - Pages -->*/}
			<NavItemPages />
			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	);
};
