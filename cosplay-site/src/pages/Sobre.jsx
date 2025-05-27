import { Link } from "react-router";

export default function Sobre() {
  // Criar círculos decorativos
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 100 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      circles.push(
        <div 
          key={i}
          className="circle-decoration"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
          }}
        />
      );
    }
    return circles;
  };

  return (
    <div className="bg-gradient-blue position-relative overflow-hidden d-flex align-items-center justify-content-center p-4">
      <div className="card card-container shadow">
        <div className="card-body p-4">
          <Link to="/" className="position-absolute top-0 start-0 m-3 text-primary-blue">
            <i className="bi bi-arrow-left"></i>
          </Link>

          <div className="text-center mb-4 mt-3">
            <h1 className="text-primary-blue fw-bold fs-4">Sobre</h1>
          </div>

          <div className="mb-4">
            <p className="small text-muted">
              O Log de Cosplays é uma plataforma para os amantes de cosplay compartilharem suas criações e se inspirarem.
            </p>

            <p className="small text-muted">
              Se você tem mais de 13 anos, faça parte da nossa comunidade e compartilhe seus cosplays favoritos.
            </p>

            <div className="bg-light-blue p-3 rounded mt-4">
              <p className="small fw-medium text-primary-blue">Se você gosta de Cosplay, faça parte!</p>
              <p className="small text-primary-blue mt-2">
                Compartilhe, inspire-se e conheça outros cosplayers. Siga-nos no Discord, Twitter e outras redes sociais
                para ficar por dentro de eventos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Círculos decorativos */}
      {renderCircles()}

      {/* Silhueta de personagem */}
      <div className="character-silhouette">
        <svg viewBox="0 0 100 50" width="100%" height="100%">
          <path d="M10,10 Q30,5 50,25 T90,30 Q70,45 50,40 T10,10" fill="#3b82f6" />
        </svg>
      </div>
    </div>
  );
}