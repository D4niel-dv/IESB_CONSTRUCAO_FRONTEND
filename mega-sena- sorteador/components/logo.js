import React from 'react';
import Image from 'next/image';
import logoMegaSena from '../public/logo-mega-sena.png'; // Substitua pelo caminho da sua imagem

const Logo = () => {
  return (
    <div>
      <Image
        src={logoMegaSena}
        alt="Logo da Mega-Sena"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Logo;