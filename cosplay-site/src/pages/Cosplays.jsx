import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Cosplays() {
  const [nome, setNome] = useState("");
  const [origem, setOrigem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemPreview, setImagemPreview] = useState(null);
  const [arquivo, setArquivo] = useState(null);
  const navigate = useNavigate();

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar objeto do cosplay
    const novoCosplay = {
      id: Date.now(),
      nome,
      origem,
      descricao,
      imagem: imagemPreview || "/placeholder.svg?height=300&width=200",
    };

    // Obter cosplays existentes do localStorage
    const cosplaysExistentes = JSON.parse(
      localStorage.getItem("cosplays") || "[]"
    );

    // Adicionar novo cosplay
    const cosplaysAtualizados = [...cosplaysExistentes, novoCosplay];

    // Salvar no localStorage
    localStorage.setItem("cosplays", JSON.stringify(cosplaysAtualizados));

    // Limpar formulário
    setNome("");
    setOrigem("");
    setDescricao("");
    setImagemPreview(null);
    setArquivo(null);

    // Redirecionar para a tela inicial
    navigate("/tela-inicial");
  };

  return (
    <div
      id="bglogin"
      class="row justify-content-center align-items-center vh-100"
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
                  Personagem desejado
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
                    type="text"
                    className="form-control"
                    placeholder="Origem"
                    value={origem}
                    onChange={(e) => setOrigem(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImagemChange}
                  />

                  {imagemPreview && (
                    <div className="mt-2 text-center">
                      <img
                        src={imagemPreview || "/placeholder.svg"}
                        alt="Preview"
                        className="img-fluid rounded border"
                        style={{ maxHeight: "160px" }}
                      />
                    </div>
                  )}
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
