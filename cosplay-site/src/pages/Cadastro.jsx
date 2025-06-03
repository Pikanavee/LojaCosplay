import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log({ nome, email, senha, confirmarSenha });
    // Redirecionar para a página de cosplays após o cadastro
    navigate("/cosplays");
  };

  return (
    <div
      id="bglogin"
      class="row justify-content-center align-items-center min-vh-100"
    >
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-12 col-md-8 col-lg-5 text-center shadow rounded bg-light">
          <div className="card card-container shadow">
            <div className="card-body p-4">
              <Link
                to="/"
                className="position-absolute top-0 start-0 m-3 text-primary-blue"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>

              <div className="text-center mb-4 mt-3">
                <h1 className="text-primary-blue fw-bold fs-4">
                  Cadastro de usuário
                </h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
