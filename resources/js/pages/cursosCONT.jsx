import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosCONT() {
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
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main
							title="Contabilidade"
							descTitle="Matemática e língua portuguesa são disciplinas importantes para entender a contabilidade, que é a ciência responsável por organizar as contas de uma empresa e registrar seus bens patrimoniais (como prédios, veículos e máquinas, entre outros). Além da matemática básica, que serve como ferramenta para calcular o lucro ou o prejuízo de uma empresa, o estudante aprenderá matemática financeira, utilizada para operações de financiamento e cálculo de taxas de juros, por exemplo. O aluno também vai conhecer quais são as regras da contabilidade e todas as leis que estabelecem o que as empresas podem fazer e quais impostos devem pagar. Na área de Informática, o estudante vai aprender a fazer planilhas e a usar programas de computador específicos para a contabilidade."
							descActingArea="Ajuda na preparação dos documentos necessários para a abertura ou o encerramento de uma empresa. Calcula os tributos (impostos, taxas e contribuições) que uma empresa deve pagar ao governo. Emite notas fiscais, gera boletos bancários e guias para o pagamento dos tributos. Registra os bens comprados e vendidos pela empresa. Elabora planilhas de controle de bens ou de estoque de mercadorias e produtos. Organiza e arquiva documentos. Auxilia na produção de relatórios diversos referentes às contas da empresa, ao cálculo do lucro ou prejuízo, do desempenho de vendas, das dívidas e dos demais demonstrativos de resultados."
							area="Gestão e Negócios"
							workload="800 horas"
							duration="2 semestres"
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
