import React from "react"
import NewUnit from "./NewUnit"

export default function News() {
	return (
		<div className="py-8">
			<div className="grid gap-4 grid-cols-3">
				<NewUnit
					image="https://i.ytimg.com/vi/HDUT3DwQb0Y/maxresdefault.jpg"
					title="Conheça a nossa unidade com um vídeo"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
				/>
				<NewUnit
					image="https://fra1.digitaloceanspaces.com/places/uploads/place/image/file/7941688/Acesso_aos_blocos.jpg"
					title="Novos refeitórios agora fornecem comida para alunos"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
				/>
				<NewUnit
					image="https://bit.ly/3e0QPj7"
					title="Entrevista sobre o projeto EcoBairro"
					description="Alunos e professores são entrevistados pelo repórter da bandeirantes sobre o projeto EcoBairro."
				/>
			</div>
		</div>
	)
}
