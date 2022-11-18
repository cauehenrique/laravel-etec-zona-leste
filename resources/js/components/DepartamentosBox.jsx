import React from "react"

import DepartamentosSubBox from "./DepartamentosSubBox"
import HorariosDepartamentos from "../images/HorariosDepartamentos.jpeg"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import ContactBox from "./ContactBox"

export default function DepartamentosBox({ title }) {
	return (
		<div className="flex flex-col items-center w-5/6 border rounded-xl shadow-md mb-12">
			<div className="w-full flex border-b-2 items-center">
				<h1 className="text-3xl w-full font-bold subpixel-antialiased text-center mg-6 px-12 py-4">
					{title}
				</h1>
			</div>
			<div className="px-16 py-12 mb-8 flex flex-col items-center w-full">
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
					<div className="grid grid-flow-row grid-auto-row gap-20">
						<ContactBox
							icon={<PhoneIcon className="h-8 w-8" />}
							description="(11) 2045-4025"
						/>
						<ContactBox
							icon={<EnvelopeIcon className="h-8 w-8" />}
							description="e211acad@cps.sp.gov.br"
						/>
						<ContactBox
							icon={<PhoneIcon className="h-8 w-8" />}
							description="(11) 2045-4026"
						/>
						<ContactBox
							icon={<PhoneIcon className="h-8 w-8" />}
							description="(11) 2045-4009"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
