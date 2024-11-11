'use client'

import Pagina from '@/components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function HomePage() {

  const faculdades = JSON.parse(localStorage.getItem("faculdades")) || []
  const cursos = JSON.parse(localStorage.getItem("cursos")) || []
  const professores = JSON.parse(localStorage.getItem("professores")) || []
  const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || []
  const alunos = JSON.parse(localStorage.getItem("alunos")) || []

  const lista = [
    {
      nome: "Clientes",
      imagem: "https://i.pinimg.com/564x/9b/b1/e5/9bb1e585ffac9ff295f70672f1cac2c6.jpg", quantidade: faculdades.length,
      link: "/cliente"
    },
    {
      nome: "Veiculos",
      imagem: "https://i.pinimg.com/564x/1c/02/8e/1c028e747b30fca77bb9326cc725fbd9.jpg", quantidade: cursos.length,
      link: "/cursos"
    },
    {
      nome: "Vendas",
      imagem: "https://i.pinimg.com/564x/ad/c8/43/adc8435ac76a2d0c986ce635f0f8bb88.jpg", quantidade: professores.length,
      link: "/professores"
    },
    {
      nome: "fornecedores",
      imagem: "https://i.pinimg.com/564x/90/ce/14/90ce14db47eb67066901d0c0ee8fc1a9.jpg", quantidade: disciplinas.length,
      link: "/disciplinas"
    },
    {
      nome: "Alunos",
      imagem: "https://i.pinimg.com/564x/95/06/76/9506766a7d42794c37c644022fa3465c.jpg", quantidade: alunos.length,
      link: "/alunos"
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
