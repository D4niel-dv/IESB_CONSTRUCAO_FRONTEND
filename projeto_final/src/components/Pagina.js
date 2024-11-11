'use client'

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSearch, FaCar, FaUser, FaCog, FaList, FaPeopleArrows, FaTruck } from 'react-icons/fa'; // Ícones modernos

export default function Pagina({ titulo, children }) {

  return (
    <>
      {/* Barra de Navegação */}
      <Navbar expand="lg" style={{ backgroundColor: '#FF5733' }} variant="dark" className="shadow-sm">
        <Container>
          {/* Logo com ícone de carro */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <FaCar size={28} className="me-2 text-white" />
            <span className="fw-bold text-white">MasterDrive </span>
          </Navbar.Brand>

          {/* Toggle para dispositivos móveis */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Links de navegação */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard" className="d-flex align-items-center text-white">
                <FaSearch size={18} className="me-2" /> controle de vendas
              </Nav.Link>

              <Nav.Link href="/cliente" className="d-flex align-items-center text-white">
                <FaUser size={18} className="me-2" /> Cliente
              </Nav.Link>
              
              <Nav.Link href="/funcionarios" className="d-flex align-items-center text-white">
                <FaPeopleArrows size={18} className="me-2" /> Funcionários
              </Nav.Link>

              <Nav.Link href="/veiculos" className="d-flex align-items-center text-white">
                <FaList size={18} className="me-2" /> Veículos
              </Nav.Link>

              <Nav.Link href="/fornecedores" className="d-flex align-items-center text-white">
                <FaTruck size={18} className="me-2" /> Fornecedores
              </Nav.Link>

              <Nav.Link href="/vendas" className="d-flex align-items-center text-white">
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
