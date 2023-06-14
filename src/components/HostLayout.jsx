import { NavLink, Outlet } from "react-router-dom"
import "./HostLayout.css"

function HostLayout() {
	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	}

	return (
		<>
			<nav className="host-nav">
				<NavLink
					end // ={true} NavLink should match the URL exactly and not partially
					to="." // Dashboard to link me to the current route where HostLayout is being rendered
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					Dashboard
				</NavLink>

				<NavLink
					to="income"
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					Income
				</NavLink>

				<NavLink
					to="vans"
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					Vans
				</NavLink>

				<NavLink
					to="/host/reviews"
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default HostLayout
