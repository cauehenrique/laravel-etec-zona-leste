import React from "react"
import { DocumentTextIcon } from "@heroicons/react/24/outline"

export default function EstagiosBox({ color, title, requirements }) {
	return (
		<div className="transition duration-150 ease-out flex justify-center items-center hover:ease-in">
			<div className="relative p-8">
				<div className="p-8 rounded-xl border shadow-md flex flex-col w-[320px] bg-zinc-50">
					<div
						className={`rounded-lg text-white p-3 absolute top-0 left-16 ${color}`}
					>
						<DocumentTextIcon className="w-8 h-8" />
					</div>
					<h1 className="text-lg subpixel-antialiased font-bold mb-4 ">
						{title}
					</h1>
					<div className="flex h-full">
						<p className="text-md break-all text-justify">
							<p className="font-semibold">Exigências: </p>
							<ul className="list-disc pl-6">
								{requirements.map((req, index) => {
									return <li key={index}>{req}</li>
								})}
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
