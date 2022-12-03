import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import DepartamentosSubBox from "../components/DepartamentosSubBox"
import HorariosDepartamentos from "../images/HorariosDepartamentos.jpeg"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import ContactBox from "../components/ContactBox"

export default function Departamentos() {
	const academicBoard = [
		{
			title: "Diretoria de Serviços Acadêmicos",
			description: "Solange Mariano Borim",
		},
		{
			title: "Agente Técnico e Administrativo",
			description: "Diva Neide Bortoli",
		},
		{
			title: "Agente Técnico e Administrativo",
			description: "Ênio Ramos Araújo",
		},
		{
			title: "Agente Técnico e Administrativo",
			description: "Edilene Mary Schimith",
		},
	]
	const administrativeServicesBoard = [
		{
			title: "Diretora de Serviços Administrativos",
			description: "Dagmar Ferreira",
		},
		{
			title: "Assessor Administrativo",
			description: "Jeferson Carmo",
		},
	]
	const direction = [
		{
			title: "Diretor",
			description: "Elpídio de Araujo",
		},
		{
			title: "Assessor Técnico Administrativo II",
			description: "Patrick Moreno da Silva",
		},
	]
	const novotecCoordination = [
		{
			title: "Coordenador NOVOTEC Administração",
			description: "Uillicre Jaquison da Silva",
		},
		{
			title: "Coordenador NOVOTEC Desenvolvimento de Sistemas",
			description: "Rogério Bezerra Costa",
		},
		{
			title: "Coordenador NOVOTEC Desenvolvimento de Sistemas",
			description: "Jeferson Roberto de Lima",
		},
		{
			title: "Coordenador NOVOTEC Logística",
			description: "Leandro Pedroza de Nóbrega",
		},
	]
	const techCoordination = [
		{
			title: "Coordenador Técnico em Administraçãoa",
			description: "Giovanna Lettieri",
		},
		{
			title: "Coordenador Técnico em Contabilidade/Serviços Jurídicos",
			description: "Rogério Bezerra Costa",
		},
		{
			title: "Coordenador Técnico em Desenvolvimento de Sistemas",
			description: "Carlos Alberto Pereira da Silva",
		},
		{
			title: "Coordenador Técnico em Logística",
			description: "Uillicre Jaquison da Silva",
		},
	]
	/* const academicBoardContact = [
		{
			phone: ["(11) 2045-4025", "(11) 2045-4009", "(11) 2045-4026"],
			email: ["e211acad@cps.sp.gov.br"],
		},
	] */
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
									{academicBoard.map((items) => {
										return (
											<DepartamentosSubBox
												title={items.title}
												description={items.description}
											/>
										)
									})}
								</div>
								<table className="table-auto w-full text-sm border-collapse border border-slate-300 mb-12">
									<thead className="text-center bg-gray-100">
										<tr>
											<th className="border border-slate-300 p-2">
												Segunda-Feira
											</th>
											<th className="border border-slate-300">Terça-Feira</th>
											<th className="border border-slate-300">Quarta-Feira</th>
											<th className="border border-slate-300">Quinta-Feira</th>
											<th className="border border-slate-300">Sexta-Feira</th>
										</tr>
									</thead>
									<tbody className="text-center">
										<tr>
											<td className="border border-slate-300 p-2">
												09h30min às 13h30min
											</td>
											<td className="border border-slate-300">
												09h30min às 13h30min
											</td>
											<td className="border border-slate-300">
												09h30min às 13h30min
											</td>
											<td className="border border-slate-300">
												09h30min às 13h30min
											</td>
											<td className="border border-slate-300">
												09h30min às 13h30min
											</td>
										</tr>
										<tr>
											<td className="border border-slate-300 p-2">
												15h30min às 16h30min
											</td>
											<td className="border border-slate-300">
												15h30min às 16h30min
											</td>
											<td className="border border-slate-300">
												15h30min às 16h30min
											</td>
											<td className="border border-slate-300">
												15h30min às 16h30min
											</td>
											<td className="border border-slate-300">
												15h30min às 16h30min
											</td>
										</tr>
										<tr>
											<td className="border border-slate-300 p-2">
												18h30min às 21h30min
											</td>
											<td className="border border-slate-300">
												18h30min às 21h30min
											</td>
											<td className="border border-slate-300">
												18h30min às 21h30min
											</td>
											<td className="border border-slate-300">
												18h30min às 21h30min
											</td>
											<td className="border border-slate-300">
												18h30min às 21h30min
											</td>
										</tr>
									</tbody>
								</table>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-around">
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4025"
										/>
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4009"
										/>
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4026"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="w-6 h-6" />}
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
									{administrativeServicesBoard.map((items) => {
										return (
											<DepartamentosSubBox
												title={items.title}
												description={items.description}
											/>
										)
									})}
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-around">
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4028"
										/>
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4003"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="w-6 h-6" />}
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
									{direction.map((items) => {
										return (
											<DepartamentosSubBox
												title={items.title}
												description={items.description}
											/>
										)
									})}
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-around">
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
											description="(11) 2045-4018"
										/>
										<ContactBox
											icon={<EnvelopeIcon className="w-6 h-6" />}
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
												{novotecCoordination.map((items) => {
													return (
														<DepartamentosSubBox
															title={items.title}
															description={items.description}
														/>
													)
												})}
											</div>
										</div>
									</div>
									<div className="w-full flex items-start justify-center">
										<div className="w-5/6 flex flex-col items-center justify-center">
											<h1 className="text-3xl font-bold mb-8">TÉCNICO</h1>
											<div className="w-full space-y-4">
												{techCoordination.map((items) => {
													return (
														<DepartamentosSubBox
															title={items.title}
															description={items.description}
														/>
													)
												})}
											</div>
										</div>
									</div>
								</div>
								<div className="flex w-full justify-center">
									<div className="w-full flex flex-wrap justify-center">
										<ContactBox
											icon={<PhoneIcon className="w-6 h-6" />}
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
