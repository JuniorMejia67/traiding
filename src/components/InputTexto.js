const InputTexto = ({ onChange }) => {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
};