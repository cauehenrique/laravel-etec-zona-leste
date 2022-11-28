import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
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
							<h1 className="font-bold text-3xl mb-6 md:w-1/2 text-center">
								PROCESSO SELETIVO SIMPLIFICADO PARA PROFESSOR ENSINO MÉDIO E
								TÉCNICO
							</h1>
						</div>
						<p className="text-justify text-lg mb-6">
							Para se inscrever: <br />
							<br />
							<b>1° </b>Acessar o site:{" "}
							<a
								href="https://urhsistemas.cps.sp.gov.br/dgsdad/SelecaoPublica/ETEC/PSS/Abertos.aspx"
								className="text-blue-500"
							>
								https://urhsistemas.cps.sp.gov.br/dgsdad/SelecaoPublica/ETEC/PSS/Abertos.aspx
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
							<h1 className="font-bold text-3xl mb-4 w-2/3 text-center">
								INSCRIÇÕES DE 26/02/2022 ATÉ ÀS 23:59 DO DIA 12/03/2022
							</h1>
						</div>
						<div className="flex flex-wrap mx-auto justify-center items-start">
							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/06/2022 - PROCESSO Nº 2022/10043"
								description="Aplicativos Informatizados (para a Habilitação Administração)"
							/>

							<ProcessBox
								color="bg-emerald-600"
								title="Edital Nº 211/07/2022 - PROCESSO Nº 2022/10047"
								description="Planejamento e Organização de Rotinas Administrativas (Administração)"
							/>

							<ProcessBox
								color="bg-indigo-600"
								title="Edital Nº 211/09/2022 – PROCESSO Nº 2022/10054"
								description="Língua Portuguesa, Literatura e Comunicação Profissional

								(Base Nacional Comum/ ETIM / MTec)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/10/2022 – PROCESSO Nº 2022/10055"
								description="Língua Estrangeira Moderna – Inglês e Comunicação Profissional

								(Base Nacional Comum/ ETIM / MTec)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-emerald-600"
								title="Edital Nº 211/11/2022 – PROCESSO Nº 2022/10057"
								description="Desenvolvimento do TCC em Logística

								(Logística)"
							/>

							<ProcessBox
								color="bg-indigo-600"
								title="Edital Nº 211/12/2022 – PROCESSO Nº 2022/10062"
								description="Planejamento do Processo de Suprimentos

								(Logística)"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/13/2022 – PROCESSO Nº 2022/10063"
								description="Biologia

								(BNC/ BNCC/ ETIM / MTec / EM com Ênfases)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-emerald-600"
								title="Edital Nº 211/14/2022 - PROCESSO Nº 2022/10065"
								description="Física

								(BNC/ BNCC/ ETIM / MTec / EM com Ênfases)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-indigo-600"
								title="Edital Nº 211/15/2022 – PROCESSO Nº 2022/10067"
								description="Matemática

								(BNC/ BNCC/ ETIM / MTec / EM com Ênfases)(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-red-600"
								title="Edital Nº 211/16/2022 – PROCESSO Nº 2022/10070"
								description="Legislação Empresarial

								(Administração Integrado ao Ensino Médio (MTec – Programa Novotec Integrado))"
							/>

							<ProcessBox
								color="bg-emerald-600"
								title="Edital Nº 211/17/2022 – PROCESSO Nº 2022/10071"
								description="Organização das Ações em Saúde e Segurança no Trabalho

								(Logística)"
							/>

							<ProcessBox
								color="bg-indigo-600"
								title="Edital Nº 211/18/2022 – PROCESSO Nº 2022/10073"
								description="Custos, Processos e Operações Contábeis

								(Administração)"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
