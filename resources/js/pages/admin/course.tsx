import axios from "axios"
import { useState } from "react"
import useFormState from "../../hooks/useFormState"

import Authenticator from "../../components/Authenticator"
import Loading from "../../components/Loading"

import type { FormEvent } from "react"

export default function AdminCoursePage() {
	const [authenticated, setAuthenticated] = useState(false)
	const [loading, setLoading] = useState(false)

	const [name, setName] = useFormState("")
	const [description, setDescription] = useFormState("")
	const [occupation, setOccupation] = useFormState("")
	const [local, setLocal] = useFormState("")
	const [types, setTypes] = useFormState("")
	const [area, setArea] = useFormState("")
	const [workload, setWorkload] = useFormState(0)
	const [duration, setDuration] = useFormState("")
	const [mode, setMode] = useFormState("")

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setLoading(true)

		const { data } = await axios.post("/api/course", {
			name,
			description,
			area,
			workload,
			duration,
			local,
			mode,
			course_types: types,
			occupation_area: occupation,
		})

		setLoading(false)
	}

	if (!authenticated)
		return <Authenticator setAuthenticated={setAuthenticated} />

	return (
		<div className="p-4 flex justify-center items-center">
			<form
				className="border border-neutral-200 p-6 grid grid-cols-3 gap-4"
				onSubmit={onSubmit}
			>
				<div className="col-span-3 mb-4">
					<h1 className="font-bold text-3xl">Curso</h1>
					<h2 className="text-xl text-neutral-500">
						Preencha as informações e envie para adicionar um novo curso na
						página inicial
					</h2>
				</div>

				<label className="input col-span-3">
					<span>Nome</span>
					<input
						type="text"
						placeholder="Desenvolvimento de Sistemas"
						value={name}
						onChange={setName}
					/>
				</label>

				<label className="input col-span-3">
					<span>Descrição</span>
					<input
						type="text"
						placeholder="Conte um pouco sobre o curso..."
						value={description}
						onChange={setDescription}
					/>
				</label>

				<label className="input col-span-3">
					<span>Área de Atuação</span>
					<input
						type="text"
						placeholder="Qual a área de atuação do curso?"
						value={occupation}
						onChange={setOccupation}
					/>
				</label>

				<label className="input col-span-3">
					<span>Localização</span>
					<input
						type="text"
						placeholder="ETEC Zona Leste"
						value={local}
						onChange={setLocal}
					/>
				</label>

				<label className="input col-span-2">
					<span>Tipos de Curso (separe por ";")</span>
					<input
						type="text"
						placeholder="Habilitação Técnica e Profissional"
						value={types}
						onChange={setTypes}
					/>
				</label>

				<label className="input">
					<span>Eixo</span>
					<input
						type="text"
						placeholder="Tecnológico"
						value={area}
						onChange={setArea}
					/>
				</label>

				<label className="input">
					<span>Carga Horária</span>
					<input
						type="number"
						placeholder="1200"
						value={workload}
						onChange={setWorkload}
					/>
				</label>

				<label className="input">
					<span>Duração</span>
					<input
						type="text"
						placeholder="4 semestres"
						value={duration}
						onChange={setDuration}
					/>
				</label>

				<label className="input">
					<span>Modalidade</span>
					<input
						type="text"
						placeholder="Presencial"
						value={mode}
						onChange={setMode}
					/>
				</label>

				<button className="button button-primary col-span-3" disabled={loading}>
					{loading ? <Loading /> : <span>Enviar</span>}
				</button>
			</form>
		</div>
	)
}
