import React from "react"

export default function MainVagasRemanescentes({
	course,
	moduleCourse,
	edital,
}) {
	return (
		<div className="flex flex-col w-full">
			<h1 className="text-2xl font-semibold text-center mb-4 w-fit pb-4 border-b-2">
				Processo Especial de Seleção de Candidatos para preenchimento de vagas
				remanescentes do <span className="font-bold"> {course}</span>, para o{" "}
				{moduleCourse}.
			</h1>
			<div className="text-left word-break text-sm mb-16">
				<p className="text-center">
					<b>EDITAL n.º {edital}</b>, de 20/06/2022
				</p>{" "}
				<br></br>
				<p></p> <br></br>
				<p>
					<b>A ESCOLA TÉCNICA ESTADUAL ETEC DA ZONA LESTE</b>, município de São
					Paulo atendendo o disposto no § 3.º do Artigo 62 do Regimento Comum
					das Escolas Técnicas Estaduais do Centro Estadual de Educação
					Tecnológica Paula Souza, torna pública a abertura do{" "}
					<b>
						Processo Especial de Seleção de Candidatos para preenchimento de
						vagas remanescentes do {course}
					</b>
					, para o <b>{moduleCourse}</b>.
				</p>{" "}
				<br></br>
				<p></p> <br></br>
				<p>
					<b>I - Das Disposições Preliminares</b>
				</p>{" "}
				<p>
					1. As vagas a que diz respeito este processo de seleção de candidatos
					serão aquelas originadas pela retenção, desistência ou transferência
					dos alunos matriculados no curso técnico na Etec.
				</p>{" "}
				<p>
					2. O processo de classificação de candidatos para as vagas
					remanescentes será por avaliação de competências desenvolvidas em:
				</p>{" "}
				<p>
					2.1. cursos concluídos do mesmo eixo tecnológico, com aproveitamento e
					devidamente comprovados, na própria escola ou em outras;
				</p>{" "}
				<p>
					2.2. estudos realizados fora do sistema formal de ensino (cursos
					extracurriculares);
				</p>{" "}
				<p>2.3. no trabalho;</p>
				<p>
					3. A avaliação terá caráter eliminatório e classificatório para o
					itinerário formativo previsto no Plano de Curso da Habilitação
					Profissional Técnica pretendida.
				</p>{" "}
				<p>
					4. Cabe à equipe de professores do curso em questão ao processo de
					vagas remanescentes, sob orientação do Coordenador de Curso e na sua
					ausência o Coordenador Pedagógico elaborarem, a partir dos resultados
					das avaliações, um plano individual para o (s) candidato (s) aprovado
					(s) e matriculado (s) indicando, quando necessário, roteiro de
					estudos, atividades a serem desenvolvidas em um programa de
					adaptações, bem como ao Orientador Educacional cabe, de acordo com
					suas atribuições descritas na ( Deliberação CEETEPS 18, de 16-07-2015
					) realizar um acompanhamento para os alunos ingressantes neste
					processo de vagas remanescentes.
				</p>{" "}
				<br></br>
				<p>
					<b>II – Das Inscrições</b>
				</p>
				<p>
					1. As inscrições deverão ser efetuadas pelo candidato, no período de
					21/06/2022 a 01/07/2022, na Secretaria Acadêmica da ETEC da zona
					leste, localizada na Avenida Águia de Haia 2.633, Cidade A E Carvalho,
					nos horários:
				</p>{" "}
				<br></br>
				<p>Das 09:30 às 13:30;</p>
				<p>Das 15:30 às 16:30;</p>
				<p>Das 18:30 às 21:30.</p>
				<p></p> <br></br>
				<p>
					2. No ato da inscrição deverão ser apresentados os seguintes
					documentos:
				</p>{" "}
				<p>
					2.1. Requerimento próprio fornecido pela Escola, completamente
					preenchido;
				</p>{" "}
				<p>
					2.2. Autoavaliação: roteiro fornecido pela Escola, onde a partir das
					competências do (s) módulo (s) anteriores o candidato deverá informar
					se têm conhecimento e/ou vivência e/ou experiência;
				</p>{" "}
				<p>2.3. Cópia simples da Cédula de Identidade (RG);</p>
				<p>
					2.4. Cópia simples do histórico escolar de conclusão do Ensino Médio /
					2.º Grau ou declaração firmada pela direção da escola de origem de que
					está matriculado no 2ª ou 3ª série do Ensino Médio ou dos certificados
					de eliminação de no mínimo 4 (quatro) disciplinas ou certificado de
					aprovação em 2(duas) áreas de estudos para candidato que tenha cursado
					a Educação de Jovens e Adultos (EJA);
				</p>{" "}
				<p>
					2.5. Declaração da escola de origem comprovando estudos anteriores
					realizados em Cursos Técnicos;
				</p>{" "}
				<p>
					2.6. Comprovantes de cursos realizados fora do sistema formal de
					ensino;
				</p>{" "}
				<p>
					2.7. Cópia simples dos documentos a seguir relacionados, exclusivos
					para comprovação de competências adquiridas no trabalho:
				</p>{" "}
				<p>
					a) Carteira Profissional e/ou comprovante de exercício profissional;
				</p>{" "}
				<p>b) Declaração de autônomo com número de inscrição no ISSQN;</p>{" "}
				<p>c) Cópia de contrato social para proprietários de empresa.</p>{" "}
				<p>
					3. Não serão aceitas inscrições pelo correio, fac-símile, por
					procuração, por Internet, condicional ou fora do prazo.
				</p>{" "}
				<p>
					4. A Inscrição implicará a completa ciência e tácita aceitação das
					normas e condições estabelecidas neste Edital, sobre as quais o
					candidato não poderá alegar desconhecimento.
				</p>{" "}
				<p>
					5. Será eliminado o candidato que não apresentar os documentos
					comprobatórios de estudos ou de experiência profissional.
				</p>{" "}
				<p></p> <br></br>
				<p>
					<b>III - Do Processo de Avaliação</b>
				</p>{" "}
				<p>1. O processo será realizado em duas fases:</p>
				<p>
					1.1. A Primeira fase, de caráter eliminatório, será constituída de:
				</p>{" "}
				<p>
					a) Avaliação dos documentos comprobatórios de experiência profissional
					apresentada e/ou dos estudos realizados;
				</p>{" "}
				<p>
					b) Análise da Autoavaliação, preenchida pelo candidato no ato da
					inscrição;
				</p>{" "}
				<p>
					c) Avaliação de competências, por meio de prova teórica objetiva que
					será realizada (data/hora), na ETEC da Zona Leste;
				</p>{" "}
				<p>
					1.1.2 A Avaliação teórica será constituída de uma prova com 30
					(trinta) questões-teste, cada uma com 5 (cinco) alternativas (A, B, C,
					D, E), relacionadas às competências profissionais dos módulos
					anteriores do Curso Técnico em Administração, constantes no Anexo I
					deste Edital;
				</p>{" "}
				<p>
					1.1.3 A resultado da prova teórica objetiva será divulgado 29/07/2022
				</p>{" "}
				<p>
					1.1.4 Será eliminado o candidato que não obtiver no{" "}
					<b>mínimo 50% de aproveitamento</b> na prova teórica objetiva.
				</p>{" "}
				<p></p> <br></br>
				<p>
					1.2. Segunda fase, de caráter eliminatório, será constituída de:
				</p>{" "}
				<p>a) Entrevista;</p>
				<p>b) Avaliação prática em laboratório.</p>
				<p>
					1.2.1 A data, horário e local da realização da segunda fase, será
					divulgada com o resultado da prova teórica objetiva da primeira fase.
				</p>{" "}
				<p></p> <br></br>
				<b>
					<p>
						2. Levando-se em consideração o aproveitamento da 1ª e 2ª fase do
						processo, os candidatos serão classificados na escala de quatro
						menções:
					</p>{" "}
					<p>a) MB: Muito Bom;</p>
					<p>b) B: Bom;</p>
					<p>c) R: Regular;</p>
					<p>d) I: Insatisfatório.</p>
					<p></p> <br></br>
					<p>
						Parágrafo único: Será considerado classificado no processo o
						candidato que tenha obtido aproveitamento satisfatório para promoção
						ou equivalente às menções MB, B ou R.
					</p>{" "}
				</b>
				<br></br>
				<p></p>
				<p>
					3. A classificação dos candidatos será por ordem de desempenho.
				</p>{" "}
				<p>
					3.1. Ocorrendo empate para efeito de classificação, serão aplicados os
					seguintes critérios de desempate:
				</p>{" "}
				<p>a) Menção da prova prática;</p>
				<p>b) Menção da prova teórica;</p>
				<p>c) Maior idade;</p>
				<p>d) Ordem de inscrição;</p>
				<p>Persistindo deve ocorrer um sorteio.</p>
				<p>
					4. A classificação final será divulgada no dia 29/07/2022, na ETEC da
					Zona Leste/local.
				</p>{" "}
				<p></p> <br></br>
				<p>
					<b>IV – Da Convocação para a Matrícula</b>
				</p>{" "}
				<p>
					1. O número de vagas disponíveis para efeito desta seleção especial
					será resultado do número de alunos da Etec retidos, desistentes ou
					transferidos em cada módulo e curso.
				</p>{" "}
				<p>
					2. Após a divulgação dos resultados, os candidatos serão convocados
					por ordem de classificação, de acordo com vagas disponíveis e poderão
					solicitar a sua matrícula no módulo para o qual tiver sido
					classificado e dentro do calendário previsto.
				</p>{" "}
				<p>
					3. O candidato convocado para matrícula deverá efetivá-la no período
					previsto para tal e o não comparecimento no prazo implicará perda da
					vaga.
				</p>{" "}
				<p>
					4. A matrícula será efetuada nos dias 01 de agosto de 2022, nos
					horários:
				</p>{" "}
				<p></p> <br></br>
				<p>Das 09:30 às 13:30;</p>
				<p>Das 15:30 às 16:30;</p>
				<p>Das 18:30 às 21:30.</p>
				<p></p> <br></br>
				<p>
					5. Na existência de novas vagas, apuradas após o processo de
					reclassificação dos alunos da Etec, será feita nova convocação de
					candidatos classificados para matrícula.
				</p>{" "}
				<p>
					6. Todas as convocações, avisos e resultados referentes à realização
					deste processo serão publicados nas (especificar as datas previstas
					neste edital e o local), sendo de inteira responsabilidade do
					candidato maior ou do seu representante legal, se menor, o seu
					acompanhamento, não sendo aceita qualquer alegação de desconhecimento.
				</p>{" "}
				<p>8. Não haverá, em nenhuma hipótese, revisão de provas.</p>
				<p></p> <br></br>
				<p>
					<b>V - Sobre o Prazo de Validade da Avaliação</b>
				</p>{" "}
				<p>
					1. Os resultados da avaliação de competências terão validade até o
					início do próximo semestre ano, contado a partir da divulgação do
					resultado. Exemplo: Se o processo teve início em novembro de um ano,
					os candidatos são chamados em janeiro do próximo ano e processo se
					encerra em julho deste mesmo ano
				</p>{" "}
				<p>
					2. O candidato, classificado para o 2º ou 3º módulo que não obteve
					vaga, poderá ser classificado no próximo processo especial de seleção
					realizado pela Etec, no prazo de validade da avaliação, com os mesmos
					pontos obtidos.
				</p>{" "}
				<p>2.1 A convocação será feita por e-mail ou telefone.</p>
				<p></p>
				<p>VI - Disposições Finais</p>
				<p>
					1. Os casos omissos neste Edital serão resolvidos pela Comissão
					Responsável pelo Processo de Seleção de Alunos para o Preenchimento de
					Vagas Remanescentes nos Cursos Técnicos, ouvido o Diretor da Etec.
				</p>{" "}
				<br></br>
				<p>
					<b>VI - Disposições Finais</b>
				</p>
				<p>
					1. Os casos omissos neste Edital serão resolvidos pela Comissão
					Responsável pelo Processo de Seleção de Alunos para o Preenchimento de
					Vagas Remanescentes nos Cursos Técnicos, ouvido o Diretor da Etec.
				</p>{" "}
				<br></br>
				<br></br>
				<p className="text-right">São Paulo, 20 de junho de 2022</p>
			</div>
			<div className="flex justify-center">
				<table className="table-auto border-collapse border-2 border-black w-1/2">
					<thead>
						<tr className="border-b border-black">
							<th colspan="2">Anexo I</th>
						</tr>
					</thead>
					<thead>
						<tr className="border-collapse border-b border-black text-center bg-gray-300">
							<td className="border border-black w-1/4">DATA</td>
							<td className="border border-black">EVENTO</td>
						</tr>
					</thead>
					<tbody className="text-center">
						<tr className="border-collapse border-black">
							<td className="border border-black">21/06/2022 a 01/07/2022</td>
							<td className="border border-black">Período de inscrição</td>
						</tr>
						<tr className="border-collapse border-black">
							<td className="border border-black">25 à 28/07/2022</td>
							<td className="border border-black">
								Convocação para entrevista e prova prática
							</td>
						</tr>
						<tr className="border-collapse border-black">
							<td className="border border-black">29/07/2022</td>
							<td className="border border-black">
								Divulgação do resultado da avaliação
								teórica/prática/entrevista/classificação
							</td>
						</tr>
						<tr className="border-collapse border-black">
							<td className="border border-black">01/08/2022</td>
							<td className="border border-black">Convocação para Matrícula</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
