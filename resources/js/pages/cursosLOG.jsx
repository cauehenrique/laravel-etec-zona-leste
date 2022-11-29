import React from "react"

import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosLOG() {
	const courseTypes = [
		"Articulação da Formação Profissional Média e Superior (AMS)",
		"Novotec Habilitação Técnica Profissional",
		"Novotec Integrado – Habilitação Técnica Profissional em período integral (M-Tec – PI)",
	]
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
					<div className="flex p-8 pr-0 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main
							title="Logística"
							descTitle="Logística é o planejamento do caminho feito por um produto ou serviço até chegar ao cliente de forma organizada, rápida e econômica. Para planejar esse caminho, o estudante vai precisar de conhecimentos de matemática, geografia e física. O aluno aprenderá sobre os processos de compra de matérias-primas, incluindo a escolha dos fornecedores, o registro dos pedidos de compra e o recebimento dos materiais adquiridos. O estudante vai aprender também como se deve movimentar as cargas e os produtos dentro de um estoque para decidir se utilizará, por exemplo, um carrinho ou uma empilhadeira, e como se deve armazenar cada tipo de produto e por quanto tempo. Vai estudar ainda sobre a entrega das mercadorias compradas pelos clientes: como organizar a carga para o transporte, qual a embalagem mais adequada (em caixas de papelão ou madeira, em páletes ou contêineres), qual é o tipo de transporte mais adequado para o produto e para o cliente (caminhões, embarcações, trem ou avião), e quais são as principais rotas que podem ser utilizadas. Além disso, o estudante aprenderá sobre os custos envolvidos em cada uma das atividades."
							descActingArea="Pesquisa preços com fornecedores para elaborar orçamentos de compra de produtos e de transporte de mercadorias; controla a entrada e a saída de mercadorias do estoque; confere os produtos recebidos de acordo com a nota fiscal, verificando defeitos, prazos de validades, além de resolver os procedimentos para a devolução dos itens com problema; separa no estoque as mercadorias que foram compradas para serem despachadas; dimensiona as quantidades de cargas e de produtos que cabem em cada tipo de transporte (moto, caminhão, navio, avião) e em cada local de estoque; pesquisa e sugere opções de transporte e rotas conforme a carga; realiza o rastreamento do produto ou mercadoria que está sendo transportado e acompanha o fluxo de entrega para alimentar os bancos de dados da empresa."
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
