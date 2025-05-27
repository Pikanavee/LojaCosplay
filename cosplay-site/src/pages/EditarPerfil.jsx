import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function EditarPerfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const navigate = useNavigate();

  // Carregar dados do perfil se existirem
  useEffect(() => {
    const perfilSalvo = JSON.parse(localStorage.getItem("perfil"));
    if (perfilSalvo) {
      setNome(perfilSalvo.nome || "");
      setEmail(perfilSalvo.email || "");
      setBio(perfilSalvo.bio || "");
      setAvatarPreview(perfilSalvo.avatar || null);
    }
  }, []);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar objeto do perfil
    const perfilAtualizado = {
      nome,
      email,
      bio,
      avatar: avatarPreview,
    };

    // Salvar no localStorage
    localStorage.setItem("perfil", JSON.stringify(perfilAtualizado));

    // Redirecionar para a tela inicial
    navigate("/tela-inicial");
  };

  return (
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-8 col-lg-5 text-center p-4 shadow rounded bg-light">
        <div className="card card-container shadow">
          <div className="card-body p-4">
            <Link
              to="/tela-inicial"
              className="position-absolute top-0 start-0 m-3 text-primary-blue"
            >
              <i className="bi bi-arrow-left"></i>
            </Link>

            <div className="text-center mb-4 mt-3">
              <h1 className="text-primary-blue fw-bold fs-4">Editar Perfil</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block">
                  <div className="avatar-circle">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview || "/placeholder.svg"}
                        alt="Avatar"
                        className="w-100 h-100 object-fit-cover"
                      />
                    ) : (
                      <span className="text-primary-blue fs-1 fw-bold">
                        {nome ? nome.charAt(0).toUpperCase() : "U"}
                      </span>
                    )}
                  </div>
                  <label
                    htmlFor="avatar-upload"
                    className="avatar-upload-button"
                  >
                    <i className="bi bi-plus"></i>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    className="d-none"
                    accept="image/*"
                    onChange={handleImagemChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="nome" className="form-label small fw-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  className="form-control"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label small fw-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bio" className="form-label small fw-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="form-control"
                  placeholder="Conte um pouco sobre você"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Salvar Alterações
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
