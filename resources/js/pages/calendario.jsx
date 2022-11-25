import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import CalendarioBox from "../components/calendarioBox"

export default function Calendario() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="py-6 p-24 flex flex-col w-full items-center">
						<h1 className="text-3xl font-bold mb-12">
							CALENDÁRIOS 2022 - SEDE E EXTENSÕES
						</h1>
						<div className="flex flex-col justify-center items-center space-y-8 w-full">
							<CalendarioBox
								title="ETEC ZL - SEDE"
								link="https://drive.google.com/file/d/1KBMUFrEKeJzc12xyNgHIa43g6YZ0KE57/view"
								image="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/11/portas_etec_zl2.jpg"
							/>
							<CalendarioBox
								title="Extensão CEU Azul da Cor do Mar"
								link="https://drive.google.com/file/d/1MBfP4V4xVOIBBJPpUxQzGAIxwiwTo3Pw/view"
								image="http://portal.sme.prefeitura.sp.gov.br/Portals/1/Images/CEUs_fachadas/1126.jpg"
							/>
							<CalendarioBox
								title="Extensão CEU Pq. São Carlos"
								link="https://drive.google.com/file/d/1bwZf5tWXnehIczsl6y99QxlPgeKZ4Egy/view"
								image="https://payload213.cargocollective.com/1/12/399321/6568244/ceu_butanta_o.jpg"
							/>
							<CalendarioBox
								title="Extensão FATEC ZL"
								link="https://drive.google.com/file/d/1H_MBAnxzveUt6zGUzhwXJreR82ECN7qz/view"
								image="http://www.fateczl.edu.br/imagens/fatec1.png"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
