import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"

export default function Calendario() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
				</div>
			</div>
			<Footer />
		</div>
	)
}
