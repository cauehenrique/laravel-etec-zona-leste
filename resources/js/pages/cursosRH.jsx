import React from "react"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosRH() {
	const courseTypes = ["Novotec Habilitação Técnica Profissional"]
	const locals = ["ETEC DA ZONA LESTE"]
	const curriculum = [
		{
			name: "Habilitação Técnica Profissional",
			link: "#",
		},
		{
			name: "Ensino Médio com Habilitação Técnica Profissional",
			link: "$",
		},
	]
	return (
		<div className="p-0 border-t-4 border-t-sky-700">
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<TopBar />
					<div className="flex p-8 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main
							title="Recursos Humanos"
							descTitle="O estudante vai precisar de conhecimentos de língua portuguesa, matemática e história para compreender o curso e aprender a realizar as tarefas sob a responsabilidade do setor de Recursos Humanos de uma empresa, como contratação, demissão e aposentadoria de funcionários e oferta de benefícios (vale-transporte, plano de saúde, vale-refeição etc.), entre outras atividades. Por isso, será importante também estudar as leis que regulam os direitos e deveres do empregador e dos empregados (legislação trabalhista). O estudante vai aprender ainda noções de psicologia para entender como as pessoas se relacionam no ambiente de trabalho, realizar processos de recrutamento e seleção de novos funcionários e promover ações de motivação."
							descActingArea="Anuncia vagas de emprego, descrevendo as atribuições do cargo a ser preenchido; aplica testes em processos seletivos; realiza cálculos para determinar os valores que serão descontados no salário dos funcionários, como o Imposto de Renda e a contribuição ao INSS, além de porcentagem referente a benefícios, como vale-transporte, plano de saúde etc.; insere informações no sistema para a geração de demonstrativos de pagamentos (holerites ou contracheques); cuida da documentação necessária para aposentadoria, contratação e demissão de profissionais, inclusive preenchendo informações na carteira de trabalho; organiza e arquiva documentos do setor; registra e controla período de férias e afastamento de funcionários; e auxilia no treinamento e capacitação dos empregados."
							techAxle="Gestão e Negócios"
							workload="1200 horas"
							duration="3 semestres"
							local={locals}
							courseType={courseTypes}
							modalType="Modalidade presencial"
							curriculum={curriculum}
						/>
						<AdBanner />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
