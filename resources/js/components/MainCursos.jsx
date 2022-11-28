import React from "react"

import {
	LightBulbIcon,
	ClockIcon,
	CalendarIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"

export default function MainCursos({}) {
	return (
		<div className="w-full">
			<div className="w-full flex justify-between mb-4">
				<div className="flex flex-col space-y-8 w-1/2">
					<h1 className="text-2xl font-bold">Administração</h1>
					<p className="break-normal">
						Como funcionam as organizações, desde empresas privadas até ONGs,
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
						para o futuro.
					</p>
				</div>
				<div className="px-4 py-6 mr-2 border space-y-4 rounded-lg shadow-sm flex flex-col w-1/3">
					<div className="flex">
						<div className="p-3 rounded-lg bg-emerald-600">
							<LightBulbIcon className="h-8 w-8 text-white" />
						</div>
						<div className="flex w-full px-6 justify-center">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-md font-bold">EIXO TECNOLÓGICO</h1>
								<p className="">Gestão e Negócios</p>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="p-3 rounded-lg bg-indigo-600">
							<ClockIcon className="h-8 w-8 text-white" />
						</div>
						<div className="flex w-full px-6 justify-center">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-md font-bold">CARGA HORÁRIA</h1>
								<p className="">1200 horas</p>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="p-3 rounded-lg bg-rose-600">
							<CalendarIcon className="h-8 w-8 text-white" />
						</div>
						<div className="flex w-full px-6 justify-center">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-md font-bold">DURAÇÃO</h1>
								<p className="">3 semestres</p>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="p-3 rounded-lg bg-emerald-600 w-fit h-fit">
							<MapPinIcon className="h-8 w-8 text-white" />
						</div>
						<div className="flex flex-wrap w-full px-6 justify-center">
							<div className="flex flex-col justify-center items-center text-center">
								<h1 className="text-md font-bold">LOCALIZAÇÃO</h1>
								<p>
									<b>· </b>ETEC DA ZONA LESTE
								</p>
								<p>
									<b>· </b>EXTENSÃO CEU PARQUE SÃO CARLOS
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center text-center">
						<h1 className="text-lg font-bold">TIPO DE CURSO</h1>
						<p className="">Habilitação Técnica Profissional</p>
						<p>Ensino Médio com Habilitação Técnica Profissional</p> <br />{" "}
						<br />
						<p>Modalidade Presencial</p>
					</div>
				</div>
			</div>
			<div className="mb-8">
				<h1 className="text-2xl font-bold mb-4">Área de Atuação</h1>
				<p className="break-normal">
					O técnico em Administração pode trabalhar em vários departamentos. No
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
					e atas.
				</p>
			</div>
			<div className="">
				<h1 className="text-2xl font-bold mb-4">Matriz Curricular</h1>
				<a href="#" className="text-blue-600">
					Habilitação Técnica Profissional
				</a>
				<a href="#" className="text-blue-600">
					Ensino Médio com Habilitação Técnica Profissional
				</a>
			</div>
		</div>
	)
}
