import React from "react"

export default function MainVestibulinho() {
	return (
		<div className="flex flex-col w-5/6">
			<div className="mb-16">
				<img
					src="https://fatweb.s3.amazonaws.com/vestibulinhoetec/assets/img/layout/1sem23/og-image.jpg"
					alt="Imagem sobre vestibulinho"
					className="h-56 object-cover"
				/>
			</div>
			<h1 className="font-bold text-2xl mb-8">Como Funciona o Vestibulinho?</h1>
			<p className="mb-24">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy t ext ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book . It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				t ext ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book . It has survived not
				only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with
				the release of Letraset sheets containing Lorem Ipsum passages, and more
				recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</p>
			<div className="flex justify-center">
				<div className="py-2 px-12 bg-sky-700 w-fit rounded-lg shadow-md">
					<a
						href="https://www.vestibulinhoetec.com.br/home/"
						className="text-white"
						target={"_blank"}
					>
						INSCREVA-SE AQUI
					</a>
				</div>
			</div>
		</div>
	)
}
