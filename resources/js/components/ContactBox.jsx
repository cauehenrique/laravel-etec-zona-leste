import React from "react"

import { PhoneIcon } from "@heroicons/react/24/outline"

export default function ContactBox({ icon, description }) {
	return (
		<div className="flex space-x-2 justify-center items-center">
			{icon}
			<p className="text-lg">{description}</p>
		</div>
	)
}
