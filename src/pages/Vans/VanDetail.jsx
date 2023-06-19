import { Link, useLocation, useLoaderData } from "react-router-dom"
import "./VanDetail.css"
import { getVans } from "../../utils/api"

export function loader({ params }) {
	// the matching params will be available by the path url.
	return getVans(params.id)
}

function VanDetail() {
	const location = useLocation() // {pathname: "/vans/5", search: "", hash: "", state: {search: "type=luxury"}, key: "emy8w7js"}
	const van = useLoaderData()

	// see if link had a state from the previous route
	const search = location.state?.search || ""
	const type = location.state?.type || "all"

	return (
		<div className="van-detail-container">
			<Link to={`..${search}`} relative="path" className="back-button">
				&larr;{" "}
				<span>Back to {type.charAt(0).toUpperCase() + type.slice(1)} vans</span>
			</Link>

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
		</div>
	)
}
export default VanDetail
