import React from "react"
import { Link } from "react-router-dom"

export default function HorariosLinkMedio() {
	return (
		<div>
			<h2 className="text-md mb-1">
				CURSOS TÉCNICOS INTEGRADOS AO ENSINO MÉDIO:
			</h2>
			<div className="text-blue-400 flex flex-col">
				<Link to="/cursos">
					<span className="font-bold">•</span> Desenvolvimento de Sistemas
				</Link>
				<Link to="/cursos">
					<span className="font-bold">•</span> Recursos Humanos
				</Link>
				<Link to="/cursos">
					<span className="font-bold">•</span> Administração
				</Link>
				<Link to="/cursos">
					<span className="font-bold">•</span> Logística
				</Link>
			</div>
		</div>
	)
}
