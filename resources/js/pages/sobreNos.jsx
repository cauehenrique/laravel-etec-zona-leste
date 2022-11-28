import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"

export default function SobreNos() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-8">
						<div className="flex flex-col w-5/6">
							<h1 className="font-bold text-2xl mb-8">ETEC ZONA LESTE</h1>
							<div className="mb-16">
								<img
									src="https://i.ytimg.com/vi/HDUT3DwQb0Y/maxresdefault.jpg"
									alt="Imagem sobre vestibulinho"
									className="h-64 object-cover"
								/>
							</div>
							<p className="mb-24">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy t
								ext ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book . It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been the industry's
								standard dummy t ext ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type
								specimen book . It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially
								unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more
								recently with desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</p>
						</div>
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
