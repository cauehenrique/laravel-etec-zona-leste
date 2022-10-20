import React from "react"

export default function ModernArtBanner() {
	return (
		<div>
			<img
				className="w-full h-48 rounded-lg my-6 object-cover"
				src="https://eteczonaleste.com.br/img/thumbnail/1649875258.jpeg"
				alt="Semana da Arte Moderna"
			/>
			<h1 className="text-2xl font-bold mb-2">Semana da Arte Moderna</h1>
			<p className="my-4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
				esse labore, consectetur, magnam quisquam illum tempora corrupti aliquid
				molestiae voluptatem perspiciatis, doloremque maiores laudantium dolor?
				At hic autem illum nostrum.
			</p>
			<a href="#" className="text-sky-500 font-bold hover:underline">
				Leia a história completa
			</a>

			<h1 className="text-3xl font-bold mb-2 mt-16">Últimas notícias</h1>
			<p className="text-neutral-400 text-xl">
				Aqui você pode acompanhar as últimas notícias da nossa unidade
			</p>
		</div>
	)
}
