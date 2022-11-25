import React from "react"
import { Link } from "react-router-dom"
import InstagramIcon from "./InstagramIcon"
import FacebookIcon from "./FacebookIcon"
import YoutubeIcon from "./YoutubeIcon"

export default function SubFooter() {
	return (
		<div className="flex flex-col justify-center w-full pt-6">
			<div className="w-full flex justify-center">
				<div className="w-full flex flex-wrap justify-evenly">
					<div className="flex flex-col items-start">
						<h1 className="text-white text-2xl font-semibold mb-2">CONTATOS</h1>
						<div className="text-white space-y-2">
							<div className="">
								<h1>Secretária:</h1>
								<p>(11) 2045-4025</p>
							</div>
							<div className="">
								<h1>Direção:</h1>
								<p>(11) 2045-4018</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-white text-2xl font-semibold mb-2">
							REDES SOCIAIS
						</h1>
						<div className="grid grid-cols-3 gap-4">
							<a
								href="https://www.instagram.com/eteczonalesteoficial/"
								target="_blank"
								className="bg-sky-500 hover:bg-sky-600 rounded-full p-1 w-fit"
							>
								<InstagramIcon />
							</a>
							<a
								href="https://web.facebook.com/Eteczonalesteoficial"
								target="_blank"
								className="bg-sky-500 hover:bg-sky-600 rounded-full p-1 w-fit"
							>
								<FacebookIcon />
							</a>
							<a
								href="https://www.youtube.com/@etecdazonaleste2949"
								target="_blank"
								className="bg-sky-500 hover:bg-sky-600 rounded-full p-1 w-fit"
							>
								<YoutubeIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="flex flex-col justify-center items-center">
				<div className="flex space-x-12 text-center">
					<Link to="/sobreNos" className="">
						Sobre
					</Link>
					<Link to="/calendario" className="">
						Calendário
					</Link>
					<Link to="/departamentos" className="">
						Departamentos
					</Link>
				</div>
				<div className="flex space-x-4">
					<a
						target="_blank"
						href="https://www.instagram.com/"
						className="bg-yellow-200 hover:bg-yellow-300 rounded-lg p-1 w-fit"
					>
						<InstagramIcon />
					</a>
					<a
						target="_blank"
						href="https://www.facebook.com/"
						className="bg-sky-200 hover:bg-sky-300 rounded-lg p-1 w-fit"
					>
						<FacebookIcon />
					</a>
					<a
						target="_blank"
						href="https://www.youtube.com/"
						className="bg-red-200 hover:bg-red-300 rounded-lg p-1 w-fit"
					>
						<YoutubeIcon />
					</a>
				</div>
				<p className="text-sm">Escola Técnica Estadual Zona Leste 2022</p>
				<div className="text-sm">
					© 2022 Grupo PW, Inc. All Rights Reserved.
				</div>
			</div> */}
		</div>
	)
}
