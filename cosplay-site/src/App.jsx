
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { useEffect } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Cosplays from "./pages/Cosplays"

import TelaInicial from "./pages/TelaInicial"
import EditarPerfil from "./pages/EditarPerfil"
import Sobre from "./pages/Sobre"

// Importar Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
// Importar Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  // Inicializar localStorage se necessário
  useEffect(() => {
    if (!localStorage.getItem("cosplays")) {
      localStorage.setItem("cosplays", JSON.stringify([]))
    }
    if (!localStorage.getItem("perfil")) {
      localStorage.setItem(
        "perfil",
        JSON.stringify({
          nome: "Usuário",
          email: "usuario@exemplo.com",
          bio: "Amante de cosplays",
        }),
      )
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cosplays" element={<Cosplays />} />
        <Route path="/tela-inicial" element={<TelaInicial />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App
