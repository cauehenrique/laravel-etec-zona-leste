import React from "react"

export default function Map() {
	return (
		<div>
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
	)
}
