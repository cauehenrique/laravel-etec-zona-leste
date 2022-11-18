import React from "react"
import NewUnit from "./NewUnit"

export default function News() {
	return (
		<div className="py-8">
			<div className="grid gap-4 grid-cols-3">
				<a href="https://www.youtube.com/watch?v=HDUT3DwQb0Y">
					<NewUnit
						image="https://img.youtube.com/vi/HDUT3DwQb0Y/hqdefault.jpg"
						title="Conheça a nossa unidade"
						description="Veja esse vídeo sobre a nossa infraestrutura e conheça a Etec Zona Leste!"
					/>
				</a>
				<a href="https://drive.google.com/drive/folders/1cDgsD1ujgAqiwT1ETSHrTZLx0VbhnggG">
					<NewUnit
						image="https://s2.glbimg.com/FDqLX_VwmgAzkh-gqhuEO7Fzkok=/0x0:3543x2362/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/T/Z/svvtpGTaSAl0I8OxqkAA/sssssssss.jpg"
						title="Visita Técnica ao Museu da Língua Portuguesa"
						description="Veja as imagens da visita dos alunos do 2º Novotec Desenvolvimento de Sistemas ao Museu da Língua Portuguesa."
					/>
				</a>
				<a href="https://www.vestibulinhoetec.com.br/home/">
					<NewUnit
						image="https://fatweb.s3.amazonaws.com/vestibulinhoetec/assets/img/layout/1sem23/og-image.jpg"
						title="Vestibulinho 1° semestre 2023"
						description="Começa nesta segunda-feira (17), o período para solicitar a redução de 50% do valor da inscrição do Vestibulinho das Etecs para o 1º semestre de 2023.	"
					/>
				</a>
			</div>
		</div>
	)
}
