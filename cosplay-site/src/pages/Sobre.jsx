import { Link } from "react-router";

export default function Sobre() {
  return (
    <div
      id="bglogin"
      class="row justify-content-center align-items-center min-vh-100"
    >
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
              <h1 className="text-primary-blue fw-bold fs-4">Sobre</h1>
            </div>

            <div className="mb-4">
              <p className="small text-muted">
                O Log de Cosplays é uma plataforma para os amantes de cosplay
                compartilharem suas criações e se inspirarem.
              </p>

              <p className="small text-muted">
                Se você tem mais de 13 anos, faça parte da nossa comunidade e
                compartilhe seus cosplays favoritos.
              </p>

              <div className="bg-light-blue p-3 rounded mt-4">
                <p className="small fw-medium text-primary-blue">
                  Se você gosta de Cosplay, faça parte!
                </p>
                <p className="small text-primary-blue mt-2">
                  Compartilhe, inspire-se e conheça outros cosplayers. Siga-nos
                  no Discord, Twitter e outras redes sociais para ficar por
                  dentro de eventos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
