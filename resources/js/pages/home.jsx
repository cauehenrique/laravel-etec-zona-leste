import React, { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import AdBanner from "../components/AdBanner"
import News from "../components/News"
import Map from "../components/Map"

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
				<div className="p-24 py-6 w-full max-w-screen-xl mx-auto">
					<AdBanner />
					<img
						className="w-full h-48 rounded-lg my-6 object-cover"
						src="https://eteczonaleste.com.br/img/thumbnail/1649875258.jpeg"
						alt="Semana da Arte Moderna"
					/>
					<h1 className="text-2xl font-bold mb-2">Semana da Arte Moderna</h1>
					<p className="my-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
						esse labore, consectetur, magnam quisquam illum tempora corrupti
						aliquid molestiae voluptatem perspiciatis, doloremque maiores
						laudantium dolor? At hic autem illum nostrum.
					</p>
					<a href="#" className="text-sky-500 font-bold hover:underline">
						Leia a história completa
					</a>

					<h1 className="text-3xl font-bold mb-2 mt-16">Últimas notícias</h1>
					<p className="text-neutral-400 text-xl">
						Aqui você pode acompanhar as últimas notícias da nossa unidade
					</p>
					<News />

					<Map />
				</div>
			</div>
		</div>
	)
}
