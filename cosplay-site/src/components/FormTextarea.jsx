export default function FormTextarea({ placeholder, value, onChange, rows = 3 }) {
  return (
    <div className="mb-3">
      <textarea
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        style={{ minHeight: `${rows * 24}px` }} /* Altura mínima fixa baseada no número de linhas */
      />
    </div>
  )
}
