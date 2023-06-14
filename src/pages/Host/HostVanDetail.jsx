import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
		<div>
			<img src={currentVan.imageUrl} width={150} />
			<h2>{currentVan.name}</h2>
			<p>{currentVan.price}</p>
			<p>{currentVan.type}</p>
		</div>
	)
}

export default HostVanDetail
