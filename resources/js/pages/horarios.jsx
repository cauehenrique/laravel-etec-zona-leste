import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import TimeBox from "../components/TimeBox"
import HorariosLinkTecnicos from "../components/HorariosLinkTecnicos"
import HorariosLinkMedio from "../components/HorariosLinkMedio"

export default function Horarios() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-8">
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
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
