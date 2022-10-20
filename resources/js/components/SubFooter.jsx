import React from "react"
import { Link } from "react-router-dom"
import InstagramIcon from "./InstagramIcon"
import FacebookIcon from "./FacebookIcon"
import YoutubeIcon from "./YoutubeIcon"

export default function SubFooter() {
	return (
		<div className="flex justify-center align-middle w-full pt-6">
			<div className="flex flex-col justify-center items-center space-y-6">
				<div className="flex space-between space-x-16">
					<Link to="/sobreNos" className="">
						Sobre
					</Link>
					<Link to="/contato" className="">
						Contato
					</Link>
					<Link to="/calendario" className="">
						Calendário
					</Link>
					<Link to="/departamentos" className="">
						Departamentos
					</Link>
				</div>
				<div className="flex space-between space-x-6">
					<a
						target="_blank"
						href="https://www.instagram.com/"
						className="bg-yellow-200 hover:bg-yellow-300 rounded-md p-1"
					>
						<InstagramIcon />
					</a>
					<a
						target="_blank"
						href="https://www.facebook.com/"
						className="bg-sky-200 hover:bg-sky-300 rounded-md p-1"
					>
						<FacebookIcon />
					</a>
					<a
						target="_blank"
						href="https://www.youtube.com/"
						className="bg-red-200 hover:bg-red-300 rounded-md p-1"
					>
						<YoutubeIcon />
					</a>
				</div>
				<div className="">© 2022 Grupo PW, Inc. All Rights Reserved.</div>
			</div>
		</div>
	)
}
