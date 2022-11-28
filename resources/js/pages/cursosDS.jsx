import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosDS() {
	const courseTypes = [
		"Articulação da Formação Profissional Média e Superior (AMS)",
		"Novotec Habilitação Técnica Profissional",
		"Novotec Integrado – Habilitação Técnica Profissional em período integral (M-Tec – PI)",
	]
	const locals = ["ETEC DA ZONA LESTE"]
	const curriculum = [
		{
			name: "Habilitação Técnica Profissional",
			link: "#",
		},
		{
			name: "Ensino Médio com Habilitação Técnica Profissional",
			link: "$",
		},
	]
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main
							title="Desenvolvimento de Sistemas"
							descTitle="É o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados."
							descActingArea="Empresas e departamentos de desenvolvimento de sistemas em organizações governamentais e não governamentais, podendo também atuar como profissional autônomo."
							techAxle="Informação e Comunicação"
							workload="1200 horas"
							duration="3 semestres"
							local={locals}
							courseType={courseTypes}
							modalType="Modalidade online e presencial"
							curriculum={curriculum}
						/>
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
