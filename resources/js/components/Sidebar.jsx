import React from "react"
import SideBarLink from "./SideBarLinks"
import {
	BookOpenIcon,
	PencilSquareIcon,
	ChatBubbleLeftEllipsisIcon,
	CalendarIcon,
} from "@heroicons/react/24/outline"

export default function Sidebar() {
	return (
		<div className="h-screen flex flex-col divide-y border-r-2">
			<a href="/">
				<img
					className="object-cover w-28 mr-36 mt-2 c ml-2"
					src="https://yt3.ggpht.com/ytc/AMLnZu-9lToKfZByYACsoOPzQnckD9O7hJVJRrWaZKZQ5Q=s900-c-k-c0x00ffffff-no-rj"
				/>
			</a>
			<div className="flex flex-col p-2 mb">
				<SideBarLink
					to="/cursos"
					icon={<BookOpenIcon className="w-6 h-6" />}
					title="Cursos"
				/>
				<SideBarLink
					to="/vestibulinho"
					icon={<PencilSquareIcon className="w-6 h-6" />}
					title="Vestibulinho"
				/>
				<SideBarLink
					to="/about"
					icon={<ChatBubbleLeftEllipsisIcon className="w-6 h-6" />}
					title="Contato"
				/>
				<SideBarLink
					to="/calendario"
					icon={<CalendarIcon className="w-6 h-6" />}
					title="Calendário"
				/>
				<p className="text-[2px] absolute bottom-0 left-0">eu moido OwO</p>
			</div>
		</div>
	)
}
