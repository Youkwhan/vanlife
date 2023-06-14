import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./HostVanDetail.css"

function HostVanDetail() {
	const params = useParams()
	const [currentVan, setCurrentVan] = useState(null)

	useEffect(() => {
		const fetchHostVanDetail = async () => {
			try {
				const res = await fetch(`/api/host/vans/${params.id}`)
				const data = await res.json()
				setCurrentVan(data.vans)
			} catch (error) {
				console.log(error.message)
			}
		}

		fetchHostVanDetail()
	}, [])
	if (!currentVan) {
		return <h1>Loading...</h1>
	}

	return (
		<section>
         {/* relative to route heiarchy in App.jsx, Not our current path in the URL. SO to=".." will go back one parent route up, which is "/host" */}
			<Link to=".." relative="path" className="back-button">
				&larr; <span>Back to all vans</span>
			</Link>

			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={currentVan.imageUrl} />
					<div className="host-van-detail-info-text">
						<i className={`van-type van-type-${currentVan.type}`}>
							{currentVan.type}
						</i>
						<h3>{currentVan.name}</h3>
						<h4>${currentVan.price}/day</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HostVanDetail
