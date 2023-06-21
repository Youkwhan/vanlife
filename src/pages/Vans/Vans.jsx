import {
	Link,
	useSearchParams,
	useLoaderData,
	defer,
	Await,
} from "react-router-dom"
import "./Vans.css"
import { getVans } from "../../utils/api"

export function loader() {
	return defer({ vans: getVans() })
}

function Vans() {
	const [searchParams, setSearchParams] = useSearchParams()
	// deferred promise of vans data in loader function
	const dataPromise = useLoaderData()

	// GET filtered search params
	const typeFilter = searchParams.get("type")

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key)
			} else {
				prevParams.set(key, value)
			}
			return prevParams
		})
	}

	// Await component children
	function renderVanElements(vans) {
		const displayedVans = typeFilter
			? vans.filter((van) => van.type === typeFilter)
			: vans

		// Array of JSX van elements, to render per grid cell
		const vanElements = displayedVans.map((van) => (
			<div key={van.id} className="van-tile">
				{/* wrap in a Link so the whole card can be selected and redirected to van.id details page*/}
				<Link
					to={van.id}
					state={{
						search: `?${searchParams.toString()}`,
						type: typeFilter,
					}}
				>
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

		return (
			<>
				<div className="van-list-filter-buttons">
					<button
						onClick={() => handleFilterChange("type", "simple")}
						className={`van-type simple ${
							typeFilter === "simple" ? "selected" : ""
						}`}
					>
						Simple
					</button>
					<button
						onClick={() => handleFilterChange("type", "luxury")}
						className={`van-type luxury ${
							typeFilter === "luxury" ? "selected" : ""
						}`}
					>
						Luxury
					</button>
					<button
						onClick={() => handleFilterChange("type", "rugged")}
						className={`van-type rugged ${
							typeFilter === "rugged" ? "selected" : ""
						}`}
					>
						Rugged
					</button>
					{typeFilter && (
						<button
							onClick={() => handleFilterChange("type", null)}
							className="van-type clear-filters"
						>
							Clear filter
						</button>
					)}
				</div>
				<div className="van-list">{vanElements}</div>
			</>
		)
	}

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<Await resolve={dataPromise.vans}>{renderVanElements}</Await>
		</div>
	)
}

export default Vans
