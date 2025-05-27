import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aqui
    console.log({ email, senha });
    // Redirecionar para a página de cosplays após o login
    navigate("/cosplays");
  };

  return (
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-8 col-lg-5 text-center shadow rounded bg-light">
        <div className="card card-container shadow">
          <div className="card-body">
            <Link
              to="/"
              className="position-absolute top-0 start-0 text-primary-blue"
            >
              <i className="bi bi-arrow-left"></i>
            </Link>

            <div className="text-center mb-4 mt-3">
              <h1 className="text-primary-blue fw-bold fs-4">
                Entre na sua conta
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
