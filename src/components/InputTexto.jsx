import React from 'react';

const InputTexto = ({ onChange }) => {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
};

export default InputTexto;