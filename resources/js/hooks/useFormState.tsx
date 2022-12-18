import { useState } from "react"
import { ChangeEvent } from "react"

function useFormState(
	value: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void]

function useFormState(
	value: number
): [number, (e: ChangeEvent<HTMLInputElement>) => void]

function useFormState(startValue: unknown) {
	const [value, setValue] = useState(startValue)

	function setter(event: ChangeEvent<HTMLInputElement>) {
		if (typeof startValue === "string") setValue(event.target.value)
		else if (typeof startValue === "number")
			setValue(event.target.valueAsNumber)
	}

	return [value, setter]
}

export default useFormState
