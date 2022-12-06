import React from "react"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"

export default function ProcessosBox({ color, title, description }) {
	return (
		<div className="relative p-8">
			<div className="p-8 rounded-xl border shadow-md flex flex-col items-center w-[300px] h-80 bg-zinc-50">
				<div
					className={`rounded-lg text-white p-2 absolute top-0 left-16 ${color}`}
				>
					<ClipboardDocumentCheckIcon className="w-10 h-10" />
				</div>
				<h1 className="text-lg subpixel-antialiased font-bold text-center mb-4 ">
					{title}
				</h1>
				<div className="flex justify-center h-full items-start">
					<p className="text-md text-center">{description}</p>
				</div>
			</div>
		</div>
	)
}
