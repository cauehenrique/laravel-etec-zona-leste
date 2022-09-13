import axios from "axios"
import InstagramIcon from "../components/InstagramIcon"
import FacebookIcon from "../components/FacebookIcon"
import YoutubeIcon from "../components/YoutubeIcon"
import { BookOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="flex">
			<div className="h-screen flex flex-col divide-y border-r-2">
				<div className="">
					<img
						className="object-cover w-28 mr-36 mt-2 ml-2"
						src="https://yt3.ggpht.com/ytc/AMLnZu-9lToKfZByYACsoOPzQnckD9O7hJVJRrWaZKZQ5Q=s900-c-k-c0x00ffffff-no-rj"
					/>
				</div>
				<div className="flex flex-col py-0">
					<div className="my-0 mx-2 mt-2 p-2 flex rounded-md hover:bg-sky-100 hover:text-sky-800 space-x-2">
						<BookOpenIcon className="w-6 h-6" />
						<p>Cursos</p>
					</div>
					<div className="my-0 mx-2 p-2 flex rounded-md hover:bg-sky-100 hover:text-sky-800 space-x-2">
						<PencilSquareIcon className="w-6 h-6" />
						<p>Vestibulinho</p>
					</div>
					<p className="text-[2px] absolute bottom-0 left-0">eu moido OwO</p>
				</div>
			</div>
			<div className="h-screen flex flex-col w-full">
				<div className="w-full bg-sky-100 p-4 px-16 flex items-center justify-between">
					<div className="flex justify-center w-full">
						<p className="">(11) 99999-9999</p>
					</div>
					<div className="space-x-10 flex">
						<InstagramIcon />
						<FacebookIcon />
						<YoutubeIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
