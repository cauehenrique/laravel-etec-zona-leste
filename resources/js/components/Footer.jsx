import React from "react"
import SubFooter from "./SubFooter"

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
				<SubFooter />
			</div>
			<div className="p-2 w-full flex flex-col justify-center items-center bg-sky-800 text-white">
				<p className="text-sm font-semibold">
					Escola Técnica Estadual Zona Leste 2022
				</p>
				<p className="text-sm">© 2022 Grupo PW, Inc. All Rights Reserved.</p>
			</div>
		</div>
	)
}
