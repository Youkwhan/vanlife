import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./HostVans.css"

function HostVans() {
	const [vans, setVans] = useState([])

	useEffect(() => {
		const fetchHostVanData = async () => {
			try {
				const res = await fetch("/api/host/vans")
				const data = await res.json()
				setVans(data.vans)
			} catch (error) {
				console.log(error)
			}
		}

		fetchHostVanData()
	}, [])

	const hostVanElements = vans.map((van) => (
		<Link
			to={`/host/vans/${van.id}`}
			key={van.id}
			className="host-van-link-wrapper"
		>
			<div className="host-van-single" key={van.id}>
				<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
				<div className="host-van-info">
					<h3>{van.name}</h3>
					<p>${van.price}/day</p>
				</div>
			</div>
		</Link>
	))

	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				{vans.length > 0 ? (
					<section>{hostVanElements}</section>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</section>
	)
}

export default HostVans
