import React from "react"

export default function calendarioBox({ title, link, image }) {
	return (
		<a
			href={link}
			target="_blank"
			className="w-5/12 flex rounded-lg border items-center hover:bg-zinc-100"
		>
			<img
				src={image}
				alt="Sede"
				className="h-32 w-48 rounded-tl-lg rounded-bl-lg object-cover"
			/>
			<div className="p-8 flex flex-col">
				<h1 className="text-lg font-semibold">{title}</h1>
			</div>
		</a>
	)
}
