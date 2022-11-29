import React from "react"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AdBanner from "../components/AdBannerVertical"
import Main from "../components/MainCursos"

export default function cursosADM() {
	const courseTypes = [
		"Articulação da Formação Profissional Média e Superior (AMS)",
		"Novotec Habilitação Técnica Profissional",
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
					<div className="flex p-8 py-6 w-full max-w-screen-xl mx-auto mb-12 space-x-6">
						<Main
							title="Administração"
							descTitle="Como funcionam as organizações, desde empresas privadas até ONGs,
                            passando por órgãos públicos, comércio e indústria. O estudante vai
                            precisar de conhecimentos de língua portuguesa, matemática, história
                            e geografia para compreender os principais assuntos do curso, como
                            história da administração, evolução das organizações ao longo do
                            tempo, contabilidade, leis que regulam o funcionamento das empresas
                            e redação de documentos. O aluno vai aprender ainda a analisar as
                            chances de um negócio ou produto ser bem-sucedido e o comportamento
                            do consumidor. Estudará também técnicas de atendimento ao cliente,
                            empreendedorismo (iniciativas para realizar novos negócios) e como
                            uma organização planeja alcançar seus objetivos e define suas metas
                            para o futuro."
							descActingArea="O técnico em Administração pode trabalhar em vários departamentos. No
                            setor de compras, por exemplo, pode elaborar pedidos de compra de
                            produtos, cadastrar fornecedores assim como conferir a entrega das
                            mercadorias adquiridas. Na área de produção, pode fazer planilhas de
                            controle de processos e produtos, registrando quais já foram
                            produzidos e em qual quantidade. No departamento de vendas, também
                            pode elaborar planilhas para acompanhar o desempenho das vendas,
                            cadastrar clientes, preencher notas fiscais e gerar boletos bancários.
                            No setor de Recursos Humanos, o técnico pode trabalhar calculando
                            salários e benefícios dos funcionários e auxiliando nos processos de
                            contratação e demissão de pessoal. Em qualquer área, pode atender
                            clientes e fornecedores e redigir documentos, como e-mails, memorandos
                            e atas."
							area="Gestão e Negócios"
							workload="1200 horas"
							duration="3 semestres"
							local={locals}
							courseType={courseTypes}
							mode="Modalidade online, semipresencial e presencial"
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
