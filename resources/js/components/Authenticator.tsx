import axios from "axios"
import useFormState from "../hooks/useFormState"
import type { Dispatch, SetStateAction } from "react"

type Props = {
	setAuthenticated: Dispatch<SetStateAction<boolean>>
}

export default function Authenticator({ setAuthenticated }: Props) {
	const [password, onPasswordChange] = useFormState("")

	async function onSubmit() {
		const { status } = await axios.post("/api/admin-auth", null, {
			headers: { Authorization: password },
		})

		setAuthenticated(status === 200)
	}

	return (
		<div className="p-4 flex justify-center">
			<form
				className="border border-neutral-200 p-6 space-y-2"
				onSubmit={(e) => {
					e.preventDefault()
					onSubmit()
				}}
			>
				<div className="mb-4">
					<h1 className="font-bold text-3xl">Desbloquear</h1>
					<h2 className="text-xl text-neutral-500">
						A página que você tentou acessar é confidencial e precisa de uma
						palavra-passe para ser visualizada.
					</h2>
				</div>
				<label className="input">
					<span>Palavra-passe</span>
					<input type="password" value={password} onChange={onPasswordChange} />
				</label>
				<button className="w-full button button-primary">Autenticar</button>
			</form>
		</div>
	)
}
