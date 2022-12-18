import { Link } from "react-router-dom"

type Props = {
	title: string
	to: string
}

export default function SidebarRawLink({ title, to }: Props) {
	return (
		<Link
			to={to}
			className="block font-semibold px-3 py-2 rounded-md hover:bg-blue-200 hover:text-sky-800"
		>
			<span className="truncate">{title}</span>
		</Link>
	)
}
