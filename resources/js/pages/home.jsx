import axios from "axios"
import React, { useEffect, useState } from "react"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="m-0 flex">
			<div className="h-screen bg-gray-600 flex flex-col p-4 divide-x-4">
				<div className="divide-y">
					<img
						className="object-cover w-28 mr-24"
						src="https://yt3.ggpht.com/ytc/AMLnZu-9lToKfZByYACsoOPzQnckD9O7hJVJRrWaZKZQ5Q=s900-c-k-c0x00ffffff-no-rj"
					/>
				</div>
				<div className="divide-y"></div> {/*Parte dos cursos*/}
			</div>
			<div className=""></div>
		</div>
	)
}
