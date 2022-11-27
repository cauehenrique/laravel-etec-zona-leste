import React from "react"
import { Link } from "react-router-dom"

export default function HorariosLinkTecnicos() {
	return (
		<div className="mb-12">
			<h2 className="text-md mb-1">CURSOS TÉCNICOS:</h2>
			<div className="text-blue-500 flex flex-col">
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
					<span className="font-bold">•</span> Jurídico
				</Link>
			</div>
		</div>
	)
}
