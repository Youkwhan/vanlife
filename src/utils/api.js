export async function getVans() {
	const res = await fetch("/api/vans")
	const data = await res.json()
	return data.vans
}

export async function getHostVans() {
	const res = await fetch("/api/host/vans")
	const data = await res.json()
	return data.vans
}
