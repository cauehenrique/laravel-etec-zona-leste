import React, { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import AdBanner from "../components/AdBanner"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col w-full">
				<TopBar />
				<div className="p-6 w-full max-w-screen-xl mx-auto">
					<AdBanner />
					<img
						className="w-full h-64 rounded-lg my-6 object-cover"
						src="https://eteczonaleste.com.br/img/thumbnail/1649875258.jpeg"
						alt="Semana da Arte Moderna"
					/>
					<h1 className="text-3xl font-bold mb-2">Semana da Arte Moderna</h1>
					<p className="my-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
						esse labore, consectetur, magnam quisquam illum tempora corrupti
						aliquid molestiae voluptatem perspiciatis, doloremque maiores
						laudantium dolor? At hic autem illum nostrum.
					</p>
					<a href="#" className="text-sky-500 font-bold hover:underline">
						Leia a história completa
					</a>
				</div>
			</div>
		</div>
	)
}
