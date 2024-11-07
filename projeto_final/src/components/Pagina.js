'use client'

import { Container, Nav, Navbar } from "react-bootstrap"
import { FaSearch, FaCar } from 'react-icons/fa'; // Importando ícones de busca e carro


export default function Pagina({ titulo, children }) {

  return (
    <>
      {/* Barra de Navegação */}
      <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/">
  <FaCar /> 
</Navbar.Brand>
     
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="/cliente">Cliente</Nav.Link>
            <Nav.Link href="/funcionarios">funcionarios</Nav.Link>
            <Nav.Link href="/veiculos">veiculos</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/alunos"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}
      <div className="bg-secondary text-center text-white py-2">
        <h1>{titulo}</h1>
      </div>

      {/* Conteudo da Página */}
      <Container className="mt-2">
        {children}
      </Container>
    </>
  )
}