import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import CosplayCard from "../components/CosplayCard";

export default function TelaInicial() {
  const [activeTab, setActiveTab] = useState("perfil");
  const [cosplays, setCosplays] = useState([]);
  const [perfilUsuario, setPerfilUsuario] = useState({
    nome: "Usuário",
    email: "usuario@exemplo.com",
    bio: "Amante de cosplays",
  });
  const navigate = useNavigate();

  // Carregar cosplays do localStorage
  useEffect(() => {
    const cosplaysSalvos = JSON.parse(localStorage.getItem("cosplays") || "[]");
    setCosplays(cosplaysSalvos);

    // Carregar perfil do usuário se existir
    const perfilSalvo = JSON.parse(localStorage.getItem("perfil"));
    if (perfilSalvo) {
      setPerfilUsuario(perfilSalvo);
    }
  }, []);

  const handleEditarPerfil = () => {
    navigate("/editar-perfil");
  };

  const handleAdicionarCosplay = () => {
    navigate("/cosplays");
  };

  return (
    <div
      id="bglogin"
      class="row justify-content-center align-items-center vh-100"
    >
      <div class="col-12 col-md-8 col-lg-5 text-center shadow rounded bg-light">
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item w-50">
            <button
              className={`nav-link w-100 ${
                activeTab === "perfil" ? "active" : ""
              }`}
              onClick={() => setActiveTab("perfil")}
            >
              Perfil
            </button>
          </li>
          <li className="nav-item w-50">
            <button
              className={`nav-link w-100 ${
                activeTab === "galeria" ? "active" : ""
              }`}
              onClick={() => setActiveTab("galeria")}
            >
              Galeria de Cosplays
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              activeTab === "perfil" ? "show active" : ""
            }`}
          >
            <div className="bg-light-blue p-3 rounded mb-3">
              <h3 className="fs-5 fw-medium">{perfilUsuario.nome}</h3>
              <p className="small text-muted">{perfilUsuario.email}</p>
              <p className="small mt-2">{perfilUsuario.bio}</p>
            </div>

            <p className="small text-muted">
              Gerencie seu perfil e veja seus cosplays favoritos.
            </p>

            <button
              className="btn btn-primary w-100"
              onClick={handleEditarPerfil}
            >
              Editar Perfil
            </button>
          </div>

          <div
            className={`tab-pane fade ${
              activeTab === "galeria" ? "show active" : ""
            }`}
          >
            {cosplays.length > 0 ? (
              <div className="row row-cols-2 g-3">
                {cosplays.map((cosplay) => (
                  <div key={cosplay.id} className="col">
                    <CosplayCard cosplay={cosplay} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <p className="text-muted mb-3">
                  Você ainda não tem cosplays cadastrados
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleAdicionarCosplay}
                >
                  Adicionar Cosplay
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
