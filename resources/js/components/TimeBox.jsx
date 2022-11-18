import React from "react"

export default function TimeBox({ title, caption, caption2 }) {
	return (
		<div className="px-12 py-3 border rounded-xl shadow-lg flex flex-col items-center">
			<h1 className="text-md font-bold mb-2">{title}</h1>
			<div className="h-full flex flex-col justify-center">
				<p>{caption}</p>
				<p>{caption2}</p>
			</div>
		</div>
	)
}
