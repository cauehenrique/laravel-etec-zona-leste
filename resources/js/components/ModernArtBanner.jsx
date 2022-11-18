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
			<a
				href="https://drive.google.com/drive/folders/1iw-T6CaDYpxrMwWuVg42sl0lC8AKSlka"
				className="text-sky-500 font-bold hover:underline"
			>
				Veja aqui as imagens do evento na Etec Zona Leste
			</a>

			<h1 className="text-3xl font-bold mb-2 mt-16">Últimas notícias</h1>
			<p className="text-neutral-400 text-xl">
				Aqui você pode acompanhar as últimas notícias da nossa unidade
			</p>
		</div>
	)
}
