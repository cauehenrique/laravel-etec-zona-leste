import React from "react"

export default function MainVestibulinho() {
	return (
		<div className="flex flex-col w-5/6">
			<h1 className="font-bold text-2xl mb-8">O que é o Vestibulinho?</h1>
			<p className="mb-10">
				O vestibulinho é um processo seletivo que seleciona candidatos para as
				Escolas Técnicas Estaduais (Etecs).
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
				Na Etec Zona Leste são oferecidas vagas para ingressar em: <br></br> I -
				na 1º série do Ensino Médio Novotec ou AMS <br></br>II - no Ensino
				Técnico no 1º módulo dos Cursos do Ensino Técnico presencial.<br></br>
				III - no Ensino Técnico no 2º módulo, por meio do cadastro de reservas
				para vagas remanescentes, mediante avaliação de certificação de
				competências, de acordo com o Artigo 41, da Lei Federal 9394/1996 e da
				Deliberação 107/2011 do CEE-SP.
			</p>
			<h1 className="font-bold text-2xl mb-8">
				Quais os pré-requisitos para tentar uma vaga?
			</h1>
			<p className="mb-10">
				-<b> Para o ingresso no Ensino Médio</b>, em seus diversos formatos, o
				candidato deverá possuir o certificado de conclusão do Ensino
				Fundamental ou a Declaração de Conclusão, assinada por agente escolar da
				escola de origem, ou o Exame Nacional para Certificação de Competências
				de Jovens e Adultos – ENCCEJA. <br></br>
				<br></br>-<b> Para o ingresso no Ensino Técnico</b> no 1º módulo -
				Cursos do Ensino Técnico (presencial, semipresencial e on-line) o
				candidato deverá possuir:
				<br></br>
				<br></br> § 1º - Para candidato que concluiu ou está cursando o Ensino
				Médio: possuir Certificado de Conclusão do Ensino Médio ou declaração
				que está matriculado a partir da 2ª série do Ensino Médio.<br></br>
				<br></br>§ 2º - Para candidato que concluiu ou está cursando a Educação
				de Jovens e Adultos - EJA ou o Exame Nacional para Certificação de
				Competências de Jovens e Adultos - ENCCEJA: possuir Certificado de
				Conclusão do Ensino Médio ou declaração que está matriculado, a partir
				do 2º termo da EJA ou 2 certificados de aprovação em áreas de estudos da
				EJA/CEEJA, ou Boletim de aprovação do ENCCEJA enviado pelo MEC, ou
				Certificado de aprovação do ENCCEJA em 2 áreas de estudos avaliadas.
				<br></br>
				<br></br>§ 3º - Para candidato que realizou o Exame Nacional do Ensino
				Médio – ENEM até a edição de 2016: possuir Certificado ou Declaração de
				Conclusão do Ensino Médio, expedido por órgão competente.<br></br>
				<br></br>§ 4º - Para o Curso de Técnico em Enfermagem o candidato deverá
				ter idade mínima de 18 anos, a completar até o dia 31-01-2023. §
				<br></br>
				<br></br>5º - Para o Curso de Técnico em Cuidados de Idosos, caso seja
				ofertado, o candidato deverá ter idade mínima de 18 anos, a completar
				até o dia 31-01-2023, e possuir certificado de Auxiliar de Enfermagem ou
				2 módulos do Curso de Técnico em Enfermagem.
				<br></br>
				<br></br>§ 6º - Caso seja ofertado o Curso de Técnico em Serviços de
				Restaurante e Bar, o candidato deverá ter idade mínima de 18 anos, a
				completar até o dia 31-01-2023.<br></br>
				<br></br>-
				<b>
					{" "}
					Para o cadastro reserva de vagas remanescentes do 2º Módulo do Ensino
					Técnico,
				</b>{" "}
				o candidato aprovado mediante avaliação de certificação de competências
				referente ao 1º módulo, deverá também estar matriculado na 3ª série do
				Ensino Médio ou tê-lo concluído para ser considerado apto para ingresso
				no curso técnico escolhido, caso haja vaga.
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
