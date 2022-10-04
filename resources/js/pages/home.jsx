import React, { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import AdBanner from "../components/AdBanner"
import News from "../components/News"

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

					<h1 className="text-3xl font-bold mb-4 mt-16">Localização</h1>
					<div className="flex justify-center">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.433174605885!2d-46.47568262866407!3d-23.523017513436926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce616495555555%3A0x8076d1577db86cf1!2sEtec%20da%20Zona%20Leste!5e0!3m2!1spt-BR!2sbr!4v1664923852109!5m2!1spt-BR!2sbr"
							width="100%"
							height="350"
							className="rounded-[20px]"
							allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}
