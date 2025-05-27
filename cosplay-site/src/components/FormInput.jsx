export default function FormInput({ type = "text", placeholder, value, onChange, required = false }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{ height: "40px" }} /* Altura fixa para evitar tremulação */
      />
    </div>
  )
}
