import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import DepartamentosSubBox from "../components/DepartamentosSubBox"
import HorariosDepartamentos from "../images/HorariosDepartamentos.jpeg"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import ContactBox from "../components/ContactBox"

export default function Departamentos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col items-center px-12 py-6 w-full mb-12">
						<div className="flex flex-col items-center w-5/6 border rounded-xl mb-12">
							<div className="w-full flex border-b-2 items-center">
								<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
									DIRETORIA ACADÊMICA - SECRETARIA
								</h1>
							</div>
							<div className="px-16 py-12 pb-2 mb-8 flex flex-col items-center w-full">
								<div className="grid grid-cols-2 grid-flow-row auto-rows-max gap-10 gap-y-8 w-full mb-8">
									<DepartamentosSubBox
										title="Diretoria de Serviços Acadêmicos"
										description="Solange Mariano Borim"
									/>
									<DepartamentosSubBox
										title="Agente Técnico e Administrativo"
										description="Diva Neide Bortoli"
									/>
									<DepartamentosSubBox
										title="Agente Técnico e Administrativo"
										description="Ênio Ramos Araújo"
									/>
									<DepartamentosSubBox
										title="Agente Técnico e Administrativo"
										description="Edilene Mary Schimith"
									/>
								</div>
								<img
									src={HorariosDepartamentos}
									alt="Horários"
									className="h-32 object-contain mb-12"
								/>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-between">
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4025"
										/>
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4009"
										/>
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4026"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="h-8 w-8" />}
											description="e211acad@cps.sp.gov.br"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center w-5/6 border rounded-xl mb-12">
							<div className="w-full flex border-b-2 items-center">
								<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
									DIRETORIA DE SERVIÇOS ADMINISTRATIVOS
								</h1>
							</div>
							<div className="px-16 py-12 pb-2 mb-8 flex flex-col items-center w-full">
								<div className="grid grid-cols-2 grid-flow-row auto-rows-max gap-10 gap-y-8 w-full mb-8">
									<DepartamentosSubBox
										title="Diretora de Serviços Administrativos"
										description="Dagmar Ferreira"
									/>
									<DepartamentosSubBox
										title="Assessor Administrativo"
										description="Jeferson Carmo"
									/>
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-between">
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4028"
										/>
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4003"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="h-8 w-8" />}
											description="e211adm@cps.sp.gov.br"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center w-5/6 border rounded-xl mb-12">
							<div className="w-full flex border-b-2 items-center">
								<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
									DIREÇÃO
								</h1>
							</div>
							<div className="px-16 py-12 pb-2 mb-8 flex flex-col items-center w-full">
								<div className="grid grid-cols-2 grid-flow-row auto-rows-max gap-10 gap-y-8 w-full mb-8">
									<DepartamentosSubBox
										title="Diretor"
										description="Elpídio de Araujo"
									/>
									<DepartamentosSubBox
										title="Assessor Técnico Administrativo II"
										description="Patrick Moreno da Silva"
									/>
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-between">
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4018"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="h-8 w-8" />}
											description="e211adm@cps.sp.gov.br"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center w-5/6 border rounded-xl mb-12">
							<div className="w-full mb-8">
								<div className="w-full flex border-b-2 items-center">
									<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
										COORDENAÇÃO
									</h1>
								</div>
								<div className="px-16 py-12 pb-2 mb-8 w-full grid grid-cols-2">
									<div className="w-full flex items-start justify-center">
										<div className="w-5/6 flex flex-col items-center">
											<h1 className="text-3xl font-bold mb-8">NOVOTEC</h1>
											<div className="w-full space-y-4">
												<DepartamentosSubBox
													title="Coordenador NOVOTEC Administração"
													description="Uillicre Jaquison da Silva"
												/>
												<DepartamentosSubBox
													title="Coordenador NOVOTEC  Desenvolvimento de Sistemas"
													description="Rogério Bezerra Costa"
												/>
												<DepartamentosSubBox
													title="Coordenador NOVOTEC Logística"
													description="Leandro Pedroza de Nóbrega"
												/>
											</div>
										</div>
									</div>
									<div className="w-full flex items-start justify-center">
										<div className="w-5/6 flex flex-col items-center justify-center">
											<h1 className="text-3xl font-bold mb-8">TÉCNICO</h1>
											<div className="w-full space-y-4">
												<DepartamentosSubBox
													title="Coordenador Técnico em Administração"
													description="Giovanna Lettieri"
												/>
												<DepartamentosSubBox
													title="Coordenador Técnico em Contabilidade/Serviços Jurídicos"
													description="Rogério Bezerra Costa"
												/>
												<DepartamentosSubBox
													title="Coordenador Técnico em Desenvolvimento de Sistemas"
													description="Carlos Alberto Pereira da Silva"
												/>
												<DepartamentosSubBox
													title="Coordenador Técnico em Logística"
													description="Uillicre Jaquison da Silva"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-center">
										<ContactBox
											icon={<PhoneIcon className="h-8 w-8" />}
											description="(11) 2045-4018"
										/>
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
