import React from "react"
import {
	LightBulbIcon,
	ClockIcon,
	CalendarIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"
export default function CursosBox({
	techAxle,
	workload,
	duration,
	local,
	courseType,
	mode,
}) {
	return (
		<div className="px-4 py-6 mr-2 border space-y-4 rounded-xl shadow-sm flex flex-col w-7/12 bg-gray-50">
			<div className="flex">
				<div className="p-3 rounded-lg bg-emerald-600">
					<LightBulbIcon className="h-8 w-8 text-white" />
				</div>
				<div className="flex w-full px-6 justify-center">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-md font-bold">EIXO TECNOLÓGICO</h1>
						<p className="">{techAxle}</p>
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
						<p className="">{workload}</p>
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
						<p className="">{duration}</p>
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
						<ul className="list-disc">
							{local.map((loc) => {
								return <li>{loc}</li>
							})}
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center text-center">
				<h1 className="text-lg font-bold">TIPO DE CURSO</h1>
				{courseType.map((courses, index) => {
					return (
						<p key={index}>
							<b>· </b>
							{courses}
						</p>
					)
				})}
				<br />
				<p>{mode}</p>
			</div>
		</div>
	)
}
