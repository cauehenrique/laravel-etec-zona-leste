import React from "react"
import InstagramIcon from "./InstagramIcon"
import FacebookIcon from "./FacebookIcon"
import YoutubeIcon from "./YoutubeIcon"

export default function Footer() {
	return (
		<div className="flex flex-col">
			<div className="w-full h-min border-t border-t-neutral-200 border-b border-neutral-200 flex align-center justify-between bg-sky-900 pb-8">
				<div className="w-72">
					<img
						className="h-30 p-4"
						src="https://eteczonaleste.com.br/img/logos/etec_logo_w.svg"
					/>
				</div>
				<div className="flex flex-col justify-center w-full pt-6">
			<div className="w-full flex justify-center">
				<div className="w-full flex justify-around">
					<div className="flex flex-col items-start">
						<h1 className="text-white text-2xl font-semibold mb-2">CONTATOS</h1>
						<div className="text-white space-y-4">
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
						<h1 className="text-white text-2xl font-semibold mb-2">ENDEREÇO</h1>
						<p className="text-white">
							Av. Águia de haia, 2633 Cidade A.E.Carvalho, São Paulo - SP
						</p>
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
		</div>
			</div>
			<div className="p-2 w-full flex flex-col justify-center items-center bg-sky-800 text-white">
				<p className="text-sm font-semibold">
					Escola Técnica Estadual Zona Leste 2022
				</p>
				<p className="text-sm">© 2022 Cauê, Julia, Camylle, Alexsander. Todos os direitos reservados.</p>
			</div>
		</div>
	)
}
