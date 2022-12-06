import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import EstagiosBox from "../components/EstagiosBox"

export default function Estagios() {
	const jobs = [
		{
			name: "ASSISTENTE ADMINISTRATIVO",
			color: "bg-rose-600",
			requirements: [
				"1° Módulo completo",
				"17-21 anos",
				"Morar na região de Itaquera",
			],
		},

		{
			name: "VAGA PARA PROGRAMADOR JUNIOR",
			color: "bg-indigo-600",
			requirements: [
				"1° Módulo completo",
				"17-21 anos",
				"Morar na região de Guaianazes",
			],
		},
		{
			name: "VAGA PARA CONTADOR JUNIOR",
			color: "bg-emerald-600",
			requirements: [
				"1° Módulo completo",
				"17-21 anos",
				"Morar na região da Penha",
			],
		},
		{
			name: "VAGA PARA ASSISTENTE ADMINISTRATIVO",
			color: "bg-rose-600",
			requirements: [
				"1° Módulo completo",
				"17-21 anos",
				"Morar na região de Itaquera",
			],
		},
		{
			name: "VAGA PARA PROGRAMADOR JUNIOR",
			color: "bg-indigo-600",
			requirements: [
				"1° Módulo completo",
				"17-21 anos",
				"Morar na região do Artur Alvim",
			],
		},
	]
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col px-12 py-6 w-full mb-12">
						<div className="flex flex-col items-center w-full">
							<img
								src="https://espro.org.br/wp-content/uploads/2021/07/KV.png"
								alt="Estágios"
								className="h-52 object-contain mb-8"
							/>
							<h1 className="font-semibold text-3xl mb-6 md:w-1/2 text-center">
								VAGAS DE ESTÁGIO
							</h1>
						</div>
						<div className="flex flex-wrap 2xl:mx-auto justify-center items-start">
							{jobs.map((item) => {
								return (
									<EstagiosBox
										color={item.color}
										title={item.name}
										requirements={item.requirements}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
