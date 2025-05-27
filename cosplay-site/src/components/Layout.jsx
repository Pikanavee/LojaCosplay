import { Link } from "react-router"
import CircleDecorations from "./CircleDecorations"
import CharacterSilhouette from "./CharacterSilhouette"

export default function Layout({ children, title, backTo, showSilhouette = false }) {
  return (
    <div className="container-fluid p-0" >
      <CircleDecorations />

      {showSilhouette && <CharacterSilhouette />}

      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4" >
            <div className="d-flex align-items-center mb-4">
              {backTo !== null && (
                <Link to={backTo} className="btn btn-sm btn-outline-secondary me-3">
                  <i className="bi bi-arrow-left"></i>
                </Link>
              )}
              <h1 className="fs-4 fw-bold m-0">{title}</h1>
            </div>

            <div className="position-relative">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
