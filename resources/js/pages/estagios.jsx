import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import MainEstagios from "../components/MainEstagios"
import EstagiosBox from "../components/EstagiosBox"

export default function Estagios() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col px-12 py-6 w-full mb-12">
						<MainEstagios />
						<div className="flex 2xl:space-between flex-wrap 2xl:mx-auto justify-center items-start">
							<EstagiosBox
								color="bg-rose-600"
								title="VAGA PARA ASSISTENTE ADMINISTRATIVO"
								description={
									<p>
										. 1° Módulo completo <br></br>. 17-21 anos <br></br>. Morar
										na região xxxxx
									</p>
								}
							/>
							<EstagiosBox
								color="bg-indigo-600"
								title="VAGA PARA PROGRAMADOR JUNIOR"
								description={
									<p>
										. 1° Módulo completo <br></br>. 17-21 anos <br></br>. Morar
										na região xxxxx
									</p>
								}
							/>
							<EstagiosBox
								color="bg-green-600"
								title="VAGA PARA CONTADOR JUNIOR"
								description={
									<p>
										. 1° Módulo completo <br></br>. 17-21 anos <br></br>. Morar
										na região xxxxx
									</p>
								}
							/>
							<EstagiosBox
								color="bg-rose-600"
								title="VAGA PARA ASSISTENTE ADMINISTRATIVO"
								description={
									<p>
										. 1° Módulo completo <br></br>. 17-21 anos <br></br>. Morar
										na região xxxxx
									</p>
								}
							/>
							<EstagiosBox
								color="bg-indigo-600"
								title="VAGA PARA PROGRAMADOR JUNIOR"
								description={
									<p>
										. 1° Módulo completo <br></br>. 17-21 anos <br></br>. Morar
										na região xxxxx
									</p>
								}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
