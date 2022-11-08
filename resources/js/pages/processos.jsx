import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"
import AdBanner from "../components/AdBannerVertical"

export default function Processos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col px-12 py-6 w-full mb-12">
						<div className="flex justify-center items-center w-full">
							<h1 className="font-bold text-3xl mb-4 w-1/2 text-center">
								PROCESSO SELETIVO SIMPLIFICADO PARA PROFESSOR ENSINO MÉDIO E
								TÉCNICO
							</h1>
						</div>
						<p className="text-justify text-lg mb-4">
							Para se inscrever: <br />
							<br />
							<b>1° </b>Acessar o site:{" "}
							<a
								href="https://urhsistemas.cps.sp.gov.br/dgsdad/SelecaoPublica/ETEC/PSS/Abertos.aspx"
								className="text-blue-600"
							>
								PROCESSO SELETIVO SIMPLIFICADO PARA AS ESCOLAS TÉCNICAS
								ESTADUAIS - ETECS;
							</a>
							<br />
							<b>2° </b>Localize pelo código da unidade: “211”; <br />
							<b>3° </b>Clique em “Inscreva-se”; <br />
							<b>4° </b>Leia atentamente o edital; <br />
							<b>5° </b>Preencha o formulário de inscrição e entregar o memorial
							circunstanciado juntamente com a documentação comprobatória;
							<br />
							<b>6° </b>Conclua as etapas no sistema.
						</p>
						<div className="flex justify-center items-center w-full">
							<h1 className="font-bold text-3xl mb-4 w-1/2 text-center">
								INSCRIÇÕES DE 26/02/2022 ATÉ ÀS 23:59 DO DIA 12/03/2022
							</h1>
						</div>
						<div className="grid grid-flow-row auto-rows-max grid-cols-3 space-between space-x-8">
							<div className="relative p-10">
								<div className="p-8 rounded-xl border shadow-md flex flex-col items-center w-[300px] bg-zinc-50">
									<div className="rounded-lg text-white p-2 absolute top-0 left-16 bg-rose-500">
										<ClipboardDocumentCheckIcon className="w-10 h-10" />
									</div>
									<h1 className="text-lg font-bold text-center mb-4">
										Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043
									</h1>
									<div className="flex justify-center h-full items-center">
										<p className="text-md text-center">
											Aplicativos Informatizados (para a Habilitação
											Administração)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
