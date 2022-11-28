import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function Vestibulinho() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main />
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
