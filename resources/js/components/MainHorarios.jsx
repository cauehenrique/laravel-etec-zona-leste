import React from "react"
import TimeBox from "./TimeBox"
import HorariosLinkTecnicos from "./HorariosLinkTecnicos"
import HorariosLinkMedio from "./HorariosLinkMedio"

export default function MainHorarios() {
	return (
		<div className="flex flex-col items-center w-5/6">
			<img
				src="http://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2018/03/horario_de_aula_2.png"
				alt="Horário"
				className="h-40 object-contain mb-8"
			/>
			<h1 className="font-bold text-3xl mb-4">Horário dos Turnos</h1>
			<div className="flex space-x-6 mb-12">
				<TimeBox
					title={"MANHÃ:"}
					caption={"Técnico: 7:40h - 12:05h"}
					caption2={"NOVOTEC: 7:30h - 12:45h"}
				/>
				<TimeBox title={"TARDE:"} caption={"NOVOTEC: 13:00h - 18:15h"} />
				<TimeBox title={"NOITE:"} caption={"Técnico: 19:00 - 23:01"} />
			</div>
			<div className="w-full grid grid-cols-2 gap-8">
				<div className="">
					<h1 className="text-3xl mb-4">Horário das Aulas:</h1>
					<HorariosLinkTecnicos />
					<HorariosLinkMedio />
				</div>
				<div className="w-full flex justify-center">
					<div className="h-[250px] w-[300px] bg-gray-400"></div>
				</div>
			</div>
		</div>
	)
}
