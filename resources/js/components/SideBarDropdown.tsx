import React, { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"

import type { ReactNode } from "react"

type SideBarDropdownProps = {
	icon: ReactNode
	title: string
	children: ReactNode
}

export default function SideBarDropdown({
	icon,
	title,
	children,
}: SideBarDropdownProps) {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div
				onClick={() => setOpen((value) => !value)}
				className="font-semibold p-2 flex justify-between items-center rounded-md hover:bg-blue-200 hover:text-sky-800 select-none cursor-pointer"
			>
				<div className="flex space-x-2">
					{icon}
					<span>{title}</span>
				</div>
				{open ? (
					<ChevronUpIcon className="w-5 h-5" />
				) : (
					<ChevronDownIcon className="w-5 h-5" />
				)}
			</div>
			{open && children}
		</div>
	)
}
