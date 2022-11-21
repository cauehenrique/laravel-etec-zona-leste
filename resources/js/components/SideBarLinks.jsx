import React from "react"
import { Link } from "react-router-dom"

export default function SideBarsLink({ icon, title, to }) {
	return (
		<Link
			to={to}
			className="font-semibold p-2 flex rounded-md hover:bg-blue-200 hover:text-sky-800 space-x-2"
		>
			{icon}
			<span>{title}</span>
		</Link>
	)
}
