import { Link } from "react-router-dom"
export const SidebarBrand = () => {
    return (
        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon">
                <h1>C-React</h1>
            </div>
        </Link>
    )
}