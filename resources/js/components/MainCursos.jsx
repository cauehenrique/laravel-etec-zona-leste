import React from "react"
import CursosBox from "./CursosBox"
export default function MainCursos({
	title,
	descTitle,
	descActingArea,
	area,
	workload,
	duration,
	local,
	courseType,
	mode,
	curriculum,
}) {
	return (
		<div className="w-full">
			<div className="w-full flex justify-between mb-8">
				<div className="flex flex-col space-y-8 w-1/2">
					<h1 className="text-2xl font-bold">{title}</h1>
					<p className="break-normal">{descTitle}</p>
				</div>
				<div className="w-3/4 flex justify-center">
					<CursosBox
						area={area}
						workload={workload}
						duration={duration}
						local={local}
						courseType={courseType}
						mode={mode}
					/>
				</div>
			</div>
			<div className="mb-8">
				<h1 className="text-2xl font-bold mb-4">Área de Atuação</h1>
				<p className="break-normal">{descActingArea}</p>
			</div>
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold mb-4">Matriz Curricular</h1>
				{curriculum.map((curr, index) => {
					return (
						<a key={index} href={curr.link} className="text-blue-600">
							{curr.name}
						</a>
					)
				})}
			</div>
		</div>
	)
}
