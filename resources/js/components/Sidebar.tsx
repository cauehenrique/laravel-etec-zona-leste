import axios from "axios"
import { useEffect, useState } from "react"
import slugify from "slugify"

import {
	AcademicCapIcon,
	BookOpenIcon,
	BriefcaseIcon,
	BuildingOfficeIcon,
	CalculatorIcon,
	CalendarIcon,
	ClipboardDocumentCheckIcon,
	ClipboardDocumentListIcon,
	ClockIcon,
	CommandLineIcon,
	PencilSquareIcon,
	ScaleIcon,
	Square3Stack3DIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline"
import LogoEtec from "../images/logo-etec.png"
import Loading from "./Loading"
import SideBarDropdown from "./SideBarDropdown"
import SideBarLink from "./SideBarLinks"
import SidebarRawLink from "./SidebarRawLink"

type CourseResponse = {
	id: number
	name: string
}

export default function Sidebar() {
	const [courses, setCourses] = useState<CourseResponse[]>()

	useEffect(() => {
		async function fetchCourses() {
			const { data } = await axios.get<CourseResponse[]>("/api/course")
			setCourses(data)
		}

		fetchCourses()
	}, [])

	return (
		<div className="h-100% flex flex-col divide-y border-r border-zinc-200">
			<a href="/" className="w-fit border-b border-zinc-200">
				<img
					className="object-cover w-32 mr-40 mt-2 mb-4 ml-2"
					src={LogoEtec}
				/>
			</a>
			<div className="flex flex-col p-2">
				<SideBarDropdown
					icon={<BookOpenIcon className="w-6 h-6" />}
					title="Cursos"
				>
					<div className="bg-blue-100 rounded-lg my-1">
						{!courses && <Loading className="text-blue-500" />}
						{courses &&
							courses.map((course) => (
								<SidebarRawLink
									key={course.id}
									to={`/cursos/${slugify(course.name.toLowerCase())}`}
									title={course.name}
								/>
							))}
					</div>
				</SideBarDropdown>
				<SideBarLink
					to="/horarios"
					icon={<ClockIcon className="w-6 h-6" />}
					title="Horários"
				/>
				<SideBarLink
					to="/sobre"
					icon={<AcademicCapIcon className="w-6 h-6" />}
					title="Sobre Nós"
				/>
				<SideBarLink
					to="/vestibulinho"
					icon={<PencilSquareIcon className="w-6 h-6" />}
					title="Vestibulinho"
				/>
				<SideBarDropdown
					icon={<ClipboardDocumentListIcon className="w-6 h-6" />}
					title="Vagas Remanescentes"
				>
					<div className="bg-blue-100 rounded-lg p-1 mt-1">
						<SideBarLink
							to="/vagas-remanescentes/administracao"
							icon={<BuildingOfficeIcon className="w-6 h-6" />}
							title="Administração"
						/>
						<SideBarLink
							to="/vagas-remanescentes/desenvolvimento-de-sistemas"
							icon={<CommandLineIcon className="w-6 h-6" />}
							title="Desenv. de Sistemas"
						/>
						<SideBarLink
							to="/vagas-remanescentes/logistica"
							icon={<Square3Stack3DIcon className="w-6 h-6" />}
							title="Logística"
						/>
						<SideBarLink
							to="/vagas-remanescentes/contabilidade"
							icon={<CalculatorIcon className="w-6 h-6" />}
							title="Contabilidade"
						/>
						<SideBarLink
							to="/vagas-remanescentes/servicos-juridicos"
							icon={<ScaleIcon className="w-6 h-6" />}
							title="Serviços Jurídicos"
						/>
						<SideBarLink
							to="/vagas-remanescentes/ceu-sao-carlos-administracao"
							icon={<BuildingOfficeIcon className="w-6 h-6" />}
							title="CEU São Carlos - ADM"
						/>
						<SideBarLink
							to="/vagas-remanescentes/ceu-sao-carlos-rh"
							icon={<BriefcaseIcon className="w-6 h-6" />}
							title="CEU São Carlos - RH"
						/>
						<SideBarLink
							to="/vagas-remanescentes/ceu-azul-rh"
							icon={<BriefcaseIcon className="w-6 h-6" />}
							title="CEU Azul - RH"
						/>
					</div>
				</SideBarDropdown>
				<SideBarLink
					to="/departamentos"
					icon={<UserGroupIcon className="w-6 h-6" />}
					title="Departamentos"
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
			</div>
		</div>
	)
}
