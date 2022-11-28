import React from "react"
import CursosBox from "./CursosBox"
export default function MainCursos({
	title,
	descTitle,
	descActingArea,
	techAxle,
	workload,
	duration,
	local,
	courseType,
	modalType,
	curriculum,
}) {
	return (
		<div className="w-full">
			<div className="w-full flex justify-between mb-4">
				<div className="flex flex-col space-y-8 w-1/2">
					<h1 className="text-2xl font-bold">{title}</h1>
					<p className="break-normal">{descTitle}</p>
				</div>
				<div className="w-3/4 flex justify-center">
					<CursosBox
						techAxle={techAxle}
						workload={workload}
						duration={duration}
						local={local}
						courseType={courseType}
						modalType={modalType}
					/>
				</div>
			</div>
			<div className="mb-8">
				<h1 className="text-2xl font-bold mb-4">Área de Atuação</h1>
				<p className="break-normal">{descActingArea}</p>
			</div>
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold mb-4">Matriz Curricular</h1>
				{/* {curriculum.map((curr) => {      USANDO O MAP
					return (
						<a href="#" className="">
							{curr.name}
						</a>
					)
				})} */}
				{/* <a href="#" className="text-blue-600">       ANTES ERA ISSO AQUI
                    Habilitação Técnica Profissional
                </a>
                <a href="#" className="text-blue-600">
                    Ensino Médio com Habilitação Técnica Profissional
                </a> */}
			</div>
		</div>
	)
}
