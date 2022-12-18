import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Vestibulinho from "./pages/vestibulinho"
import SobreNos from "./pages/sobreNos"
import Horarios from "./pages/horarios"
import Estagios from "./pages/estagios"
import Processos from "./pages/processos"
import Departamentos from "./pages/departamentos"
import Calendario from "./pages/calendario"
import CursosDS from "./pages/cursosDS"
import CursosADM from "./pages/cursosADM"
import CursosCONT from "./pages/cursosCONT"
import CursosLOG from "./pages/cursosLOG"
import CursosRH from "./pages/cursosRH"
import CursosSJ from "./pages/cursosSJ"
import VagasRemanescentesADM from "./pages/vagasRemanescentesADM"
import VagasRemanescentesCONT from "./pages/vagasRemanescentesCONT"
import VagasRemanescentesDS from "./pages/vagasRemanescentesDS"
import VagasRemanescentesLOG from "./pages/vagasRemanescentesLOG"
import VagasRemanescentesSJ from "./pages/vagasRemanescentesSJ"
import VagasRemanescentesCeuCarlosRH from "./pages/VagasRemCeuCarlosRH"
import VagasRemanescentesCeuADM from "./pages/VagasRemCeuADM"
import VagasRemanescentesCeuAzulRH from "./pages/VagasRemCeuAzulRH"

import AdminCoursePage from "./pages/admin/course"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/vestibulinho" element={<Vestibulinho />} />
			<Route path="/sobre" element={<SobreNos />} />
			<Route path="/horarios" element={<Horarios />} />
			<Route path="/estagios" element={<Estagios />} />
			<Route path="/processos" element={<Processos />} />
			<Route path="/departamentos" element={<Departamentos />} />
			<Route path="/calendario" element={<Calendario />} />
			<Route
				path="/cursos/desenvolvimento-de-sistemas"
				element={<CursosDS />}
			/>
			<Route path="/cursos/administracao" element={<CursosADM />} />
			<Route path="/cursos/recursos-humanos" element={<CursosRH />} />
			<Route path="/cursos/logistica" element={<CursosLOG />} />
			<Route path="/cursos/contabilidade" element={<CursosCONT />} />
			<Route path="/cursos/servicos-juridicos" element={<CursosSJ />} />
			<Route
				path="/vagas-remanescentes/administracao"
				element={<VagasRemanescentesADM />}
			/>
			<Route
				path="/vagas-remanescentes/contabilidade"
				element={<VagasRemanescentesCONT />}
			/>
			<Route
				path="/vagas-remanescentes/desenvolvimento-de-sistemas"
				element={<VagasRemanescentesDS />}
			/>
			<Route
				path="/vagas-remanescentes/logistica"
				element={<VagasRemanescentesLOG />}
			/>
			<Route
				path="/vagas-remanescentes/servicos-juridicos"
				element={<VagasRemanescentesSJ />}
			/>
			<Route
				path="/vagas-remanescentes/ceu-sao-carlos-administracao"
				element={<VagasRemanescentesCeuADM />}
			/>
			<Route
				path="/vagas-remanescentes/ceu-azul-rh"
				element={<VagasRemanescentesCeuAzulRH />}
			/>
			<Route
				path="/vagas-remanescentes/ceu-sao-carlos-rh"
				element={<VagasRemanescentesCeuCarlosRH />}
			/>
			<Route path="/admin">
				<Route path="course" element={<AdminCoursePage />} />
			</Route>
		</Routes>
	)
}

if (document.getElementById("app")) {
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById("app")
	)
}
