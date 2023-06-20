// import { redirect } from "react-router-dom"
import { redirect } from "./redirectUtil"

export async function requireAuth() {
	// async since in the future we might have to pull from a db, secure
	const isLoggedIn = localStorage.getItem("loggedin")

	if (!isLoggedIn) {
		throw redirect("/login?message=You must log in first.")
	}
	return null
}
