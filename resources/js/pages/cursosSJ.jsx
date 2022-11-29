import React from "react"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosSJ() {
	const courseTypes = [
		"Novotec Habilitação Técnica Profissional",
		"Novotec Integrado – Habilitação Técnica Profissional em período integral (M-Tec – PI)",
	]
	const locals = ["ETEC DA ZONA LESTE"]
	const curriculum = [
		{
			name: "Habilitação Técnica Profissional",
			link: "#",
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
							title="Serviços Jurídicos"
							descTitle="Como o foco do curso está nas leis e normas, o aluno vai estudar as áreas do Direito. Vai aprender sobre a Constituição Federal (direito constitucional), a punição aos crimes (direito penal), as regras para relações e disputas entre as pessoas e também as normas para disputas e questões familiares (direito civil), o funcionamento dos órgãos públicos (direito administrativo), as regras para os negócios entre empresas e pessoas (direito empresarial), como deve ser a relação entre patrão e empregado, considerando direitos e deveres de cada um (direito do trabalho), cobrança de tributos, como os impostos (direito tributário) e a proteção garantida aos consumidores (direito do consumidor), entre outros assuntos. O estudante vai conhecer também como são elaborados e redigidos os processos, contratos e documentos jurídicos. Além de aprender sobre as leis, o aluno vai estudar conceitos de administração de empresas, matemática financeira, técnicas de atendimento ao cliente e inglês instrumental. A língua portuguesa é fundamental."
							descActingArea="Auxilia o advogado e oferece apoio técnico e administrativo a empresas. Presta atendimento ao público; verifica os prazos de cada etapa de um processo judicial; calcula valores dos honorários dos advogados e dos custos de um processo; recebe e envia documentos, registrando a movimentação em sistemas ou livros de protocolo; redige contratos, ofícios, processos e cartas comerciais e arquiva processos, entre outras atividades."
							area="Gestão e Negócios"
							workload="1200 horas"
							duration="3 semestres"
							local={locals}
							courseType={courseTypes}
							mode="Modalidade presencial"
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
