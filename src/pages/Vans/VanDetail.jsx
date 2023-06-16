import { useParams, Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import "./VanDetail.css"

function VanDetail() {
	const params = useParams() // {id : 1}
	const location = useLocation() // {pathname: "/vans/5", search: "", hash: "", state: {search: "type=luxury"}, key: "emy8w7js"}
	const [van, setVan] = useState(null)

	useEffect(() => {
		const fetchVanDetail = async () => {
			try {
				const res = await fetch(`/api/vans/${params.id}`)
				const data = await res.json()
				setVan(data.vans)
			} catch (error) {
				console.log(error.message)
			}
		}

		fetchVanDetail()
	}, [params.id])

	// see if link had a state from the previous route
	const search = location.state?.search || ""
	const type = location.state?.type || "all"

	return (
		<div className="van-detail-container">
			<Link to={`..${search}`} relative="path" className="back-button">
				&larr;{" "}
				<span>Back to {type.charAt(0).toUpperCase() + type.slice(1)} vans</span>
			</Link>
			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	)
}
export default VanDetail
