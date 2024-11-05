import React, { useState } from 'react-bootstrap';

const NumeroAleatorio = () => {
  const [numero, setNumero] = useState(0);

  const gerarNumero = () => {
    setNumero(Math.floor(Math.random() * 60) + 1);
  };

  return (
    <button onClick={gerarNumero}>Gerar Número</button>
  );
};

export default NumeroAleatorio;