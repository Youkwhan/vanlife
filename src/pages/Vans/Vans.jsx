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
			<Link to={van.id}>
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
				<button
					onClick={() => setSearchParams({ type: "simple" })}
					className={`van-type simple ${
						typeFilter === "simple" ? "selected" : ""
					}`}
				>
					Simple
				</button>
				<button
					onClick={() => setSearchParams({ type: "luxury" })}
					className={`van-type luxury ${
						typeFilter === "luxury" ? "selected" : ""
					}`}
				>
					Luxury
				</button>
				<button
					onClick={() => setSearchParams({ type: "rugged" })}
					className={`van-type rugged ${
						typeFilter === "rugged" ? "selected" : ""
					}`}
				>
					Rugged
				</button>
				{typeFilter && (
					<button
						onClick={() => setSearchParams({})}
						className="van-type clear-filters"
					>
						Clear filter
					</button>
				)}
			</div>
			<div className="van-list">{vanElements}</div>
		</div>
	)
}

export default Vans
