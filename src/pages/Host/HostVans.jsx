import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import "./HostVans.css"
import { getHostVans } from "../../utils/api"
import { requireAuth } from "../../utils/utils"

export async function loader({ request }) {
	await requireAuth(request) // await we still want to wait for auth before rendering component

	const hostVansPromise = getHostVans()
	return defer({ vans: hostVansPromise })
}

export default function HostVans() {
	const dataPromise = useLoaderData()

	function renderVanElements(vans) {
		const hostVanElements = vans.map((van) => (
			<Link to={van.id} key={van.id} className="host-van-link-wrapper">
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
			<div className="host-vans-list">
				<section>{hostVanElements}</section>
			</div>
		)
	}

	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<Suspense fallback={<h2>Loading vans...</h2>}>
				<Await resolve={dataPromise.vans}>{renderVanElements}</Await>
			</Suspense>
		</section>
	)
}


