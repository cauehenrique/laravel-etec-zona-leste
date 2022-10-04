import React from "react"

export default function NewUnit({ image, title, description }) {
	return (
		<div className="border rounded-lg shadow-sm w-72">
			<img className="w-full h-32 object-cover rounded-t" src={image} />
			<div className="overflow-hidden px-2 py-0">
				<h2 className="font-bold">{title}</h2>
				<p className="text-neutral-400">{description}</p>
			</div>
		</div>
	)
}
