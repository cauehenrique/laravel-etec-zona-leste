import React from "react"
import NewUnit from "./NewUnit"

export default function News() {
	return (
		<div className="py-8">
			<div className="grid gap-4 grid-cols-3">
				<NewUnit
					image="https://img.youtube.com/vi/HDUT3DwQb0Y/hqdefault.jpg"
					title="Conheça a nossa unidade com um vídeo"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
				/>
				<NewUnit
					image="https://fra1.digitaloceanspaces.com/places/uploads/place/image/file/7941688/Acesso_aos_blocos.jpg"
					title="Novos refeitórios agora fornecem comida para alunos"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
				/>
				<NewUnit
					image="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/309460974_781319376512415_4545906539753364646_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=k4QB0oYMH-YAX9bG8GD&_nc_ht=scontent-gru2-2.xx&oh=00_AT-LbsZlIdh-GlW2rssSMpDh-eqYV4u2T7dcvVxDNef4wQ&oe=63545694"
					title="Vestibulinho 1° semestre 2023"
					description="Começa nesta segunda-feira (17), o período para solicitar a redução de 50% do valor da inscrição do Vestibulinho das Etecs para o 1º semestre de 2023.	"
				/>
			</div>
		</div>
	)
}
