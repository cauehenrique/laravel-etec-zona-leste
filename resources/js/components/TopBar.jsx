import React from "react"

import InstagramIcon from "../components/InstagramIcon"
import FacebookIcon from "../components/FacebookIcon"
import YoutubeIcon from "../components/YoutubeIcon"

export default function TopBar() {
	return (
		<div className="w-full h-min border-b border-b-neutral-200 p-2 px-16 flex items-center justify-between">
			<div className="flex justify-center w-full">
				<p className="">(11) 99999-9999</p>
			</div>
			<div className="space-x-2 flex">
				<a
					target="_blank"
					href="https://www.instagram.com/"
					className="bg-yellow-100 hover:bg-yellow-200 rounded-md p-1"
				>
					<InstagramIcon />
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/"
					className="bg-red-200 hover:bg-red-300 rounded-md p-1"
				>
					<YoutubeIcon />
				</a>
				<a
					target="_blank"
					href="https://www.facebook.com/"
					className="bg-sky-200 hover:bg-sky-300 rounded-md p-1"
				>
					<FacebookIcon />
				</a>
			</div>
		</div>
	)
}
