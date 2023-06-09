import { useEffect, useState } from "react"

function Vans() {
	const [vans, setVans] = useState([])
	console.log(vans)

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

	return <h1>Vans page goes here 🚐</h1>
}

export default Vans
