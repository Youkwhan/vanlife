import "./App.css"
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import HostVanDetail, {
	loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader } from "./pages/Login"

import Error from "./components/Error"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import { requireAuth } from "./utils/utils"

import "./server"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="login" element={<Login />} loader={loginLoader} />
			<Route
				path="vans"
				element={<Vans />}
				loader={vansLoader}
				errorElement={<Error />}
			/>
			<Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

			{/* Host route should be protected per login user */}
			<Route path="host" element={<HostLayout />}>
				<Route
					index
					element={<Dashboard />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async () => await requireAuth()}
				/>
				<Route path="vans" element={<HostVans />} loader={hostVansLoader} />
				<Route
					path="vans/:id"
					element={<HostVanDetail />}
					loader={hostVanDetailLoader}
				>
					<Route
						index
						element={<HostVanInfo />}
						loader={async () => await requireAuth()}
					/>
					<Route
						path="pricing"
						element={<HostVanPricing />}
						loader={async () => await requireAuth()}
					/>
					<Route
						path="photos"
						element={<HostVanPhotos />}
						loader={async () => await requireAuth()}
					/>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
