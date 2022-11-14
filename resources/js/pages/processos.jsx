import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import ProcessBox from "../components/ProcessBox"
import MainProcessos from "../components/MainProcessos"

export default function Processos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col px-12 py-6 w-full mb-12">
						<MainProcessos />
						<div className="flex 2xl:space-between flex-wrap 2xl:mx-auto justify-center items-start">
							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
								description="Aplicativos Informatizados (para a Habilitação Administração)"
							/>

							<ProcessBox
								color="bg-indigo-600"
								title="Edital Nº 211/09/2022 – PROCESSO Nº 2022/10054"
								description="Língua Portuguesa, Literatura e Comunicação Profissional

							(Base Nacional Comum/ ETIM / MTec)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/08/2022 – PROCESSO Nº 2022/10049"
								description="Administração de Recursos Humanos
							(Administração)"
							/>

							<ProcessBox
								color="bg-emerald-600"
								title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
								description="Aplicativos Informatizados (para a Habilitação Administração)"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
								description="Aplicativos Informatizados (para a Habilitação Administração)"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
								description="Aplicativos Informatizados (para a Habilitação Administração)"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
