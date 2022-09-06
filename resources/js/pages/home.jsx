import axios from "axios"
import React, { useEffect, useState } from "react"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="h-screen w-screen">
			{/* {response && <Example value={response[0].title} />}  */}
			<nav className="h-[10%] w-screen bg-gray-800">
				<div className="mx-auto"></div>
			</nav>
			{response &&
				response.map(({ id, title }) => (
					<h1 className="" key={id}>
						{title}
					</h1>
				))}
		</div>
	)
}
