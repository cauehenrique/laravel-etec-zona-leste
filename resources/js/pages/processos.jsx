import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"
import AdBanner from "../components/AdBannerVertical"
import ProcessBox from "../components/ProcessBox"

export default function Processos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col px-12 py-6 w-full mb-12">
						<div className="flex justify-center items-center w-full">
							<h1 className="font-bold text-3xl mb-4 md:w-1/2 text-center">
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
							<h1 className="font-bold text-3xl mb-4 md:w-1/2 text-center">
								INSCRIÇÕES DE 26/02/2022 ATÉ ÀS 23:59 DO DIA 12/03/2022
							</h1>
						</div>
						<div className="flex 2xl:space-between flex-wrap 2xl:mx-auto justify-center items-start">
							<ProcessBox
							color = "bg-red-500" 
							title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
							description="Aplicativos Informatizados (para a Habilitação Administração)" />

							<ProcessBox
							color = "bg-indigo-500" 
							title="Edital Nº 211/09/2022 – PROCESSO Nº 2022/10054"
							description="Língua Portuguesa, Literatura e Comunicação Profissional

							(Base Nacional Comum/ ETIM / MTec)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))" />

							<ProcessBox
							color = "bg-red-500" 
							title="Edital Nº 211/08/2022 – PROCESSO Nº 2022/10049"
							description="Administração de Recursos Humanos
							(Administração)" />

							<ProcessBox
							color = "bg-emerald-500" 
							title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
							description="Aplicativos Informatizados (para a Habilitação Administração)" />

							<ProcessBox
							color = "bg-red-500" 
							title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
							description="Aplicativos Informatizados (para a Habilitação Administração)" />

							<ProcessBox
							color = "bg-red-500" 
							title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
							description="Aplicativos Informatizados (para a Habilitação Administração)" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
