import React from "react"

import InstagramIcon from "../components/InstagramIcon"
import FacebookIcon from "../components/FacebookIcon"
import YoutubeIcon from "../components/YoutubeIcon"

export default function TopBar() {
	return (
		<div className="w-full h-min border-b border-b-neutral-200 p-2 px-16 flex items-center justify-between bg-sky-50">
			<div className="flex justify-center w-full">
				<a
					href="https://www.vestibulinhoetec.com.br/home/"
					target="_blank"
					className="text-sky-600"
				>
					Acesse o site do vestibulinho clicando aqui!
				</a>
			</div>
			<div className="space-x-2 flex">
				<a
					target="_blank"
					href="https://www.instagram.com/eteczonalesteoficial/"
					className="bg-yellow-200 hover:bg-yellow-300 rounded-full p-1"
				>
					<InstagramIcon />
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/@etecdazonaleste2949"
					className="bg-red-200 hover:bg-red-300 rounded-full p-1"
				>
					<YoutubeIcon />
				</a>
				<a
					target="_blank"
					href="https://web.facebook.com/Eteczonalesteoficial"
					className="bg-sky-200 hover:bg-sky-300 rounded-full p-1"
				>
					<FacebookIcon />
				</a>
			</div>
		</div>
	)
}
