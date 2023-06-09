import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import "./server"

function App() {
	return (
		<>
			<header>
				<Link className="site-logo" to="/">
					#VANLIFE
				</Link>
				<nav>
					<Link to="/about">About</Link>
					<Link to="/vans">Vans</Link>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
			</Routes>
		</>
	)
}

export default App
