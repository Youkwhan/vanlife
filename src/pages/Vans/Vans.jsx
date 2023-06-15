import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./Vans.css"

function Vans() {
	const [vans, setVans] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get("type")

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans

	// Array of JSX van elements, to render per grid cell
	const vanElements = displayedVans.map((van) => (
		<div key={van.id} className="van-tile">
			{/* wrap in a Link so the whole card can be selected and redirected to van.id details page*/}
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>
						${van.price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
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
			<div className="van-list-filter-buttons">
				<Link to="?type=simple" className="van-type simple">
					Simple
				</Link>
				<Link to="?type=luxury" className="van-type luxury">
					Luxury
				</Link>
				<Link to="?type=rugged" className="van-type rugged">
					Rugged
				</Link>
				<Link to="." className="van-type clear-filters">
					Clear filter
				</Link>
			</div>
			<div className="van-list">{vanElements}</div>
		</div>
	)
}

export default Vans
