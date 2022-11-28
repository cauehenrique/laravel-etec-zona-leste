import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"

const currentYear = new Date()
const nextYear = currentYear.getFullYear() + 1

const ARTICLE_CONTENT = [
	"Para candidato que concluiu ou está cursando o Ensino Médio: possuir Certificado de Conclusão do Ensino Médio ou declaração que está matriculado a partir da 2ª série do Ensino Médio.",
	"Para candidato que concluiu ou está cursando a Educação de Jovens e Adultos - EJA ou o Exame Nacional para Certificação de Competências de Jovens e Adultos - ENCCEJA: possuir Certificado de Conclusão do Ensino Médio ou declaração que está matriculado, a partir do 2º termo da EJA ou 2 certificados de aprovação em áreas de estudos da EJA/CEEJA, ou Boletim de aprovação do ENCCEJA enviado pelo MEC, ou Certificado de aprovação do ENCCEJA em 2 áreas de estudos avaliadas.",
	`Para o Curso de Técnico em Enfermagem o candidato deverá ter idade mínima de 18 anos, a completar até o dia 31/01/${nextYear}.`,
	`Para o Curso de Técnico em Cuidados de Idosos, caso seja ofertado, o candidato deverá ter idade mínima de 18 anos, a completar até o dia 31/01/${nextYear}, e possuir certificado de Auxiliar de Enfermagem ou 2 módulos do Curso de Técnico em Enfermagem.`,
	`Caso seja ofertado o Curso de Técnico em Serviços de Restaurante e Bar, o candidato deverá ter idade mínima de 18 anos, a completar até o dia 31/01/${nextYear}.`,
]

export default function Vestibulinho() {
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<div className="flex flex-col w-5/6">
							<h1 className="font-bold text-2xl mb-8">
								O que é o Vestibulinho?
							</h1>
							<p className="mb-10">
								O vestibulinho é um processo seletivo que seleciona candidatos
								para as Escolas Técnicas Estaduais (Etecs).
							</p>
							<div className="mb-10 flex justify-center">
								<img
									src="https://i0.wp.com/cajamarnoticias.com/wp-content/uploads/2022/10/Vestibulinho-ETEC-.jpg?fit=1366%2C768&ssl=1"
									alt="Imagem sobre vestibulinho"
									className="h-80 object-cover"
								/>
							</div>
							<h1 className="font-bold text-2xl mb-8">
								São oferecidas vagas para quais cursos?
							</h1>
							<p className="mb-10">
								Na Etec Zona Leste são oferecidas vagas para ingressar em:{" "}
								<br></br> I - na 1º série do Ensino Médio Novotec ou AMS{" "}
								<br></br>II - no Ensino Técnico no 1º módulo dos Cursos do
								Ensino Técnico presencial.<br></br>
								III - no Ensino Técnico no 2º módulo, por meio do cadastro de
								reservas para vagas remanescentes, mediante avaliação de
								certificação de competências, de acordo com o Artigo 41, da Lei
								Federal 9394/1996 e da Deliberação 107/2011 do CEE-SP.
							</p>
							<h1 className="font-bold text-2xl mb-8">
								Quais os pré-requisitos para tentar uma vaga?
							</h1>
							<p className="mb-10">
								<ul className="space-y-2">
									<li>
										<strong>Para o ingresso no Ensino Médio</strong>, em seus
										diversos formatos, o candidato deverá possuir o certificado
										de conclusão do Ensino Fundamental ou a Declaração de
										Conclusão, assinada por agente escolar da escola de origem,
										ou o Exame Nacional para Certificação de Competências de
										Jovens e Adultos – ENCCEJA.
									</li>
									<li>
										<strong>Para o ingresso no Ensino Técnico</strong> no 1º
										módulo - Cursos do Ensino Técnico (presencial,
										semipresencial e on-line) o candidato deverá possuir:
									</li>
								</ul>
								<div className="space-y-4 mt-4">
									{ARTICLE_CONTENT.map((article, i) => (
										<Article position={i + 1} description={article} />
									))}
									<p>
										<strong>
											Para o cadastro reserva de vagas remanescentes do 2º
											Módulo do Ensino Técnico,
										</strong>
										o candidato aprovado mediante avaliação de certificação de
										competências referente ao 1º módulo, deverá também estar
										matriculado na 3ª série do Ensino Médio ou tê-lo concluído
										para ser considerado apto para ingresso no curso técnico
										escolhido, caso haja vaga.
									</p>
								</div>
							</p>
							<div className="flex justify-center">
								<div className="py-2 px-12 bg-sky-700 w-fit rounded-lg shadow-md">
									<a
										href="https://www.vestibulinhoetec.com.br/home/"
										target="_blank"
										className="text-white"
									>
										INSCREVA-SE AQUI
									</a>
								</div>
							</div>
						</div>
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

function Article({
	position,
	description,
}: {
	position: number
	description: string
}) {
	return (
		<p>
			§ {position}º - {description}
		</p>
	)
}
