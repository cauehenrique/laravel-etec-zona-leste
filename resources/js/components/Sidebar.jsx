import React from "react"
import SideBarLink from "./SideBarLinks"
import {
	BookOpenIcon,
	PencilSquareIcon,
	ChatBubbleLeftEllipsisIcon,
	CalendarIcon,
	AcademicCapIcon,
	ClockIcon,
	BriefcaseIcon,
	ClipboardDocumentCheckIcon,
	UserGroupIcon,
	ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline"
import LogoEtec from "../images/logo-etec.png"

export default function Sidebar() {
	return (
		<div className="h-100% flex flex-col divide-y border-r border-zinc-200">
			<a href="/" className="w-fit border-b border-zinc-200">
				<img
					className="object-cover w-32 mr-36 mt-2 mb-4 ml-2"
					src={LogoEtec}
				/>
			</a>
			<div className="flex flex-col p-2 mb">
				<SideBarLink
					to="/cursos"
					icon={<BookOpenIcon className="w-6 h-6" />}
					title="Cursos"
				/>
				<SideBarLink
					to="/vestibulinho"
					icon={<PencilSquareIcon className="w-6 h-6" />}
					title="Vestibulinho"
				/>
				<SideBarLink
					to="/sobreNos"
					icon={<AcademicCapIcon className="w-6 h-6" />}
					title="Sobre Nós"
				/>
				<SideBarLink
					to="/horarios"
					icon={<ClockIcon className="w-6 h-6" />}
					title="Horários"
				/>
				<SideBarLink
					to="/calendario"
					icon={<CalendarIcon className="w-6 h-6" />}
					title="Calendários"
				/>
				<SideBarLink
					to="/estagios"
					icon={<BriefcaseIcon className="w-6 h-6" />}
					title="Estágios"
				/>
				<SideBarLink
					to="/processos"
					icon={<ClipboardDocumentCheckIcon className="w-6 h-6" />}
					title="Processos"
				/>
				<SideBarLink
					to="/departamentos"
					icon={<UserGroupIcon className="w-6 h-6" />}
					title="Departamentos"
				/>
				<SideBarLink
					to="/vagasRemanescentes"
					icon={<ClipboardDocumentListIcon className="w-6 h-6" />}
					title="Vagas Remanescentes"
				/>
				<p className="text-[2px] absolute bottom-0 left-0">eu moido OwO</p>
			</div>
		</div>
	)
}
