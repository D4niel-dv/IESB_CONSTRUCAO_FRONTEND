import React, { useState } from 'react-bootstrap';
import Logo from './components/logo';
import NumeroAleatorio from './components/NumeroAleatorio';

import Link from 'next/link';


return (
  <div>
    <h1>Bem-vindo ao Sorteador da Mega-Sena!</h1>
    <Link href="/sorteio">
      <a>Sortear Números</a>
    </Link>
  </div>
);



const Sorteio = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumeros = () => {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero);
      }
    }
    setNumerosSorteados(novosNumeros);
  };

  return (
    <div>
      <Logo />
      <button onClick={sortearNumeros}>Sortear</button>
      <ul>
        {numerosSorteados.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sorteio;