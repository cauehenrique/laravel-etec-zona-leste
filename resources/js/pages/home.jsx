import React, { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import AdBanner from "../components/AdBanner"
import News from "../components/News"
import Map from "../components/Map"
import Footer from "../components/Footer"
import ModernArtBanner from "../components/ModernArtBanner"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="p-24 py-6 w-full max-w-screen-xl mx-auto mb-12">
						<AdBanner />
						<ModernArtBanner />
						<News />
						<Map />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
