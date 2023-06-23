import { db, vansCollectionRef } from "../config/firebaseConfig"
import { doc, getDoc, getDocs } from "firebase/firestore/lite"

export async function getVans() {
	const querySnapshot = await getDocs(vansCollectionRef)
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}))
	return dataArr
}

export async function getVan(id) {
	const docRef = doc(db, "vans", id)
	const vanSnapshot = await getDoc(docRef)
	return {
		...vanSnapshot.data(),
		id: vanSnapshot.id,
	}
}
// export async function getVans(id) {
// 	const url = id ? `/api/vans/${id}` : "/api/vans"
// 	const res = await fetch(url)
// 	if (!res.ok) {
// 		throw {
// 			message: "Failed to fetch vans",
// 			statusText: res.statusText,
// 			status: res.status,
// 		}
// 	}
// 	const data = await res.json()
// 	return data.vans
// }

export async function getHostVans(id) {
	const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
	const res = await fetch(url)
	if (!res.ok) {
		throw {
			message: "Failed to fetch vans",
			statusText: res.statusText,
			status: res.status,
		}
	}
	const data = await res.json()
	return data.vans
}

export async function loginUser(creds) {
	const res = await fetch("/api/login", {
		method: "post",
		body: JSON.stringify(creds),
	})
	const data = await res.json()

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		}
	}

	return data // return {user and token}
}
