'use client'

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSearch, FaCar, FaUser, FaCog, FaList, FaPeopleArrows, FaTruck } from 'react-icons/fa'; // Ícones modernos

export default function Pagina({ titulo, children }) {

  return (
    <>
      {/* Barra de Navegação */}
      <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
        <Container>
          {/* Logo com ícone de carro */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <FaCar size={28} className="me-2" />
            <span className="fw-bold">Loja de Carros</span>
          </Navbar.Brand>

          {/* Toggle para dispositivos móveis */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Links de navegação */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="d-flex align-items-center">
                <FaSearch size={18} className="me-2" /> Buscar
              </Nav.Link>

              <Nav.Link href="/cliente" className="d-flex align-items-center">
                <FaUser size={18} className="me-2" /> Cliente
              </Nav.Link>
              
              <Nav.Link href="/funcionarios" className="d-flex align-items-center">
                <FaPeopleArrows size={18} className="me-2" /> Funcionários
              </Nav.Link>

              <Nav.Link href="/veiculos" className="d-flex align-items-center">
                <FaList size={18} className="me-2" /> Veículos
              </Nav.Link>

              <Nav.Link href="/fornecedores" className="d-flex align-items-center">
                <FaTruck size={18} className="me-2" /> Fornecedores
              </Nav.Link>

              <Nav.Link href="/vendas" className="d-flex align-items-center">
                <FaCog size={18} className="me-2" /> Vendas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Barra de Título */}
      <div className="bg-secondary text-center text-white py-3">
        <h1>{titulo}</h1>
      </div>

      {/* Conteúdo da Página */}
      <Container className="mt-3">
        {children}
      </Container>
    </>
  );
}
