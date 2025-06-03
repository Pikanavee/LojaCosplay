import { Link } from "react-router";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      id="bglogin"
      class="d-flex justify-content-center align-items-center  min-vh-100"
    >
      <div class="d-flex w-100 justify-content-center align-items-center  min-vh-100">
        <div class="col-12 col-md-8 col-lg-5 text-center p-4 shadow rounded bg-light">
          <div className="text-center mb-4">
            <h2 className="fs-4 fw-bold mb-3">Bem-vindo ao Cosplay Log</h2>
            <p className="text-muted mb-4">
              Registre, organize e compartilhe seus cosplays favoritos em um só
              lugar!
            </p>
          </div>

          <div className="d-grid gap-3">
            <Link to="/login" className="btn btn-primary">
              Entrar
            </Link>
            <Link to="/cadastro" className="btn btn-outline-primary">
              Criar Conta
            </Link>
            <Link to="/cosplays" className="btn btn-outline-secondary">
              Ver Cosplays
            </Link>
            <Link to="/sobre" className="btn btn-link text-decoration-none">
              Sobre o Cosplay Log
            </Link>
          </div>

          <div className="position-relative mt-5 pt-3">
            <div className="position-absolute top-0 start-50 translate-middle-x">
              <div className="d-flex justify-content-center">
                <div className="badge bg-primary bg-opacity-75 px-3 py-2 rounded-pill">
                  <i className="bi bi-stars me-1"></i>
                  Crie seu primeiro cosplay hoje!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
