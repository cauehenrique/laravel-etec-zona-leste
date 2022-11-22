import React from "react"

export default function NewUnit({ image, title, description }) {
	return (
		<div className="border rounded-lg shadow-sm h-full">
			<img className="w-full h-32 object-cover rounded-t" src={image} />
			<div className="overflow-hidden p-2">
				<h1 className="font-bold truncate">{title}</h1>
				<p className="text-neutral-400">{description}</p>
			</div>
		</div>
	)
}
