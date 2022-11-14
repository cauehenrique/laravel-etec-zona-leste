import React from "react"

export default function DepartamentosBox({ title }) {
	return (
		<div className="flex flex-col items-center w-5/6 border rounded-xl shadow-md">
			<div className="w-full flex border-b-2 items-center mb-12">
				<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
					{title}
				</h1>
			</div>
			<div className=""></div>
		</div>
	)
}
