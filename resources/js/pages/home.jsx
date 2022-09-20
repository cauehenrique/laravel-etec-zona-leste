import axios from "axios"
import InstagramIcon from "../components/InstagramIcon"
import FacebookIcon from "../components/FacebookIcon"
import YoutubeIcon from "../components/YoutubeIcon"
import { BookOpenIcon, PencilSquareIcon, ChatBubbleLeftEllipsisIcon, CalendarIcon } from "@heroicons/react/24/outline"
import SideBarsLink from "../components/SideBarsLinks"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
	const [response, setResponse] = useState()

	useEffect(async () => {
		const { data } = await axios.get("/api/navbar-anchors") //*
		setResponse(data)
	}, [])

	return (
		<div className="flex">
			<div className="h-screen flex flex-col divide-y border-r-2">
				<div className="#">
					<img
						className="object-cover w-28 mr-36 mt-2 c ml-2"
						src="https://yt3.ggpht.com/ytc/AMLnZu-9lToKfZByYACsoOPzQnckD9O7hJVJRrWaZKZQ5Q=s900-c-k-c0x00ffffff-no-rj"
					/>
				</div>
				<div className="flex flex-col py-0 mb">
					<div className="mt-2">
						<SideBarsLink icon={ <BookOpenIcon className="w-6 h-6" /> } title="Cursos" />
						<SideBarsLink icon={ <PencilSquareIcon className="w-6 h-6" /> } title="Vestibulinho" />
						<Link to="/about">
							<SideBarsLink icon={ <ChatBubbleLeftEllipsisIcon className="w-6 h-6" /> } title="Contato" />
						</Link>
						<SideBarsLink icon={ <CalendarIcon className="w-6 h-6" /> } title="Calendário" />
					</div>
					<p className="text-[2px] absolute bottom-0 left-0">eu moido OwO</p>
				</div>
			</div>
			<div className="h-screen flex flex-col w-full">
				<div className="w-full bg-sky-100 p-2 px-16 flex items-center justify-between">
					<div className="flex justify-center w-full">
						<p className="">(11) 99999-9999</p>
					</div>
					<div className="space-x-10 flex">
						<a href="https://www.instagram.com/" className="hover:bg-yellow-200 hover:rounded-full p-1">
							<InstagramIcon />
						</a>
						<a href="https://www.youtube.com/" className="hover:bg-red-300 hover:rounded-full p-1">
							<YoutubeIcon />
						</a>
						<a href="https://www.facebook.com/" className="hover:bg-sky-300 hover:rounded-full p-1">
							<FacebookIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
