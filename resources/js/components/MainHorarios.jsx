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
					caption={"Técnico: 7:40 - 12:05"}
					caption2={"NOVOTEC: 7:30 - 12:45"}
				/>
				<TimeBox title={"TARDE:"} caption={"NOVOTEC: 13:00 - 18:15"} />
				<TimeBox title={"NOITE:"} caption={"Técnico: 19:00 - 23:01"} />
			</div>
			<div className="w-full">
				<div className="">
					<h1 className="text-3xl mb-4">Horário das Aulas:</h1>
					<HorariosLinkTecnicos />
					<HorariosLinkMedio />
				</div>
			</div>
		</div>
	)
}
