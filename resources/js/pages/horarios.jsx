import React from "react"
import { Link } from "react-router-dom"

export default function Horarios() {
	return (
		<div>
			<h1>This is my cool about page! 🔱</h1>
			<Link className="text-blue-700 underline hover:opacity-60" to="/">
				Go to home page
			</Link>
		</div>
	)
}
