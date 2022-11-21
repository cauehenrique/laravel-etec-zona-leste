import React from "react"

export default function DepartamentosSubBox({ title, description }) {
	return (
		<div className="rounded-3xl border shadow-md flex flex-col px-4 py-3 w-full">
			<h1 className="text-lg font-semibold">{title}</h1>
			<p className="text-md">{description}</p>
		</div>
	)
}
