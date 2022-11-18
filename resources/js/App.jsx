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
import VagasRemanescentes from "./pages/vagasRemanescentes"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/vestibulinho" element={<Vestibulinho />} />
			<Route path="/sobreNos" element={<SobreNos />} />
			<Route path="/horarios" element={<Horarios />} />
			<Route path="/estagios" element={<Estagios />} />
			<Route path="/processos" element={<Processos />} />
			<Route path="/departamentos" element={<Departamentos />} />
			<Route path="/calendario" element={<Calendario />} />
			<Route path="/vagasRemanescentes" element={<VagasRemanescentes />} />
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
