import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"

export default function Vestibulinho() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-24 pr-10 py-6 w-full max-w-screen-xl mx-auto mb-12 space-between space-x-6">
						<div className="flex flex-col justify-center w-5/6">
							<div className="mb-16">
								<img
									src="https://fatweb.s3.amazonaws.com/vestibulinhoetec/assets/img/layout/1sem23/og-image.jpg"
									alt="Imagem sobre vestibulinho"
									className="h-56 object-cover"
								/>
							</div>
							<h1 className="font-bold text-2xl mb-8">
								Como Funciona o Vestibulinho?
							</h1>
							<p className="mb-24">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
								eius quia et minus cum sapiente dignissimos recusandae laborum
								nam! Repellendus, dolore! Accusamus modi error repellat cumque
								explicabo iste maiores quia! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Iure necessitatibus vitae in
								sapiente unde, deserunt qui iusto, exercitationem beatae,
								perspiciatis numquam animi voluptatibus autem quae vel enim ab!
								Ut, fuga.
							</p>
							<div className="flex justify-center">
								<div className="py-2 px-12 bg-sky-700 w-fit rounded-lg shadow-md">
									<a
										href="https://www.vestibulinhoetec.com.br/home/"
										className="text-white"
									>
										INSCREVA-SE AQUI
									</a>
								</div>
							</div>
						</div>
						<div className="flex justify-center">aa</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
