import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import DepartamentosBox from "../components/DepartamentosBox"

export default function Departamentos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex flex-col items-center px-12 py-6 w-full mb-12">
						<DepartamentosBox title="DIRETORIA ACADÊMICA - SECRETARIA" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
