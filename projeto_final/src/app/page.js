'use client'

import Pagina from '@/components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function HomePage() {

  const fornecedores= JSON.parse(localStorage.getItem("fornecedores")) || []
  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []
  const veiculos = JSON.parse(localStorage.getItem("veiculos ")) || []
  const vendas = JSON.parse(localStorage.getItem("vendas")) || []
  const cliente = JSON.parse(localStorage.getItem("cliente")) || []

  const lista = [
    {
      nome: "Clientes",
      imagem: "https://i.pinimg.com/564x/9b/b1/e5/9bb1e585ffac9ff295f70672f1cac2c6.jpg", quantidade: cliente.length,
      link: "/cliente"
    },
    {
      nome: "Veiculos",
      imagem: "https://i.pinimg.com/564x/1c/02/8e/1c028e747b30fca77bb9326cc725fbd9.jpg", quantidade: veiculos.length,
      link: "/veiculos"
    },
    {
      nome: "Vendas",
      imagem: "https://i.pinimg.com/564x/ad/c8/43/adc8435ac76a2d0c986ce635f0f8bb88.jpg", quantidade: vendas.length,
      link: "/vendas"
    },
    {
      nome: "fornecedores",
      imagem: "https://i.pinimg.com/564x/90/ce/14/90ce14db47eb67066901d0c0ee8fc1a9.jpg", quantidade: fornecedores.length,
      link: "/fornecedores"
    },
    {
      nome: "Funcionarios",
      imagem: "https://i.pinimg.com/564x/95/06/76/9506766a7d42794c37c644022fa3465c.jpg", quantidade: funcionarios.length,
      link: "/funcionarios"
    },
  ]

  return (
    <Pagina titulo={"Master Drive"}>
      <Row md={5} className="g-4">
        {lista.map(item => (
          <Col className='py-2' key={item.id}>  {/* Adicionando key para otimização */}
            <Card style={{ height: '100%', backgroundColor: '#FF5733' }}> {/* Cor de fundo vermelha */}
              <Card.Img 
                src={item.imagem} 
                style={{ 
                  height: '200px',   /* Altura fixa para uniformizar as imagens */
                  objectFit: 'cover', /* Garante que as imagens cubram o espaço sem distorção */
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }} 
              />
              <Card.Body className="text-white" style={{ fontFamily: 'Arial, sans-serif' }}> {/* Fonte branca e moderna */}
                <Card.Title>{item.nome}</Card.Title>
                Cadastrados: {item.quantidade}
              </Card.Body>
              <Card.Footer className='text-end'>
                <Button href={item.link} variant="light">Ver Lista</Button> {/* Cor do botão mais clara */}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}
