import { useEffect, useState } from "react"
import "./Vans.css"

function Vans() {
	const [vans, setVans] = useState([])
	console.log(vans)

	// Array of JSX van elements, to render per grid cell
	const vanElements = vans.map((van) => (
		<div key={van.id} className="van-tile">
			<img src={van.imageUrl} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>
					${van.price}
					<span>/day</span>
				</p>
			</div>
			<i className={`van-type ${van.type} selected`}>{van.type}</i>
		</div>
	))

	// fetch vans data
	useEffect(() => {
		const fetchVanData = async () => {
			try {
				const res = await fetch("/api/vans")
				const data = await res.json()
				setVans(data.vans)
			} catch (error) {
				console.log(error)
			}
		}

		fetchVanData()
	}, [])

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list">{vanElements}</div>
		</div>
	)
}

export default Vans
