import { db, vansCollectionRef } from "../config/firebaseConfig"
import { doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"

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

export async function getHostVans() {
	// 123 is a hardcoded authentication id
	const q = query(vansCollectionRef, where("hostId", "==", "123"))
	const querySnapshot = await getDocs(q)
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}))
	return dataArr
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
