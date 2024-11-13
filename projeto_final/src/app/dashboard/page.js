// Define que este é um componente do cliente, necessário para o Next.js
'use client'

// Importa o componente Pagina para encapsular o layout da página
import Pagina from '@/components/Pagina'
// Importa os hooks useState e useEffect do React
import { useState, useEffect } from 'react'
// Importa componentes do react-bootstrap para layout e estilização
import { Button, Row, Col, Card } from 'react-bootstrap'
// Importa os componentes SalesChart, SalesTable e SummaryPanel para exibir gráficos, tabelas e resumos
import SalesChart from '@/app/dashboard/components/SalesChart'
import SalesTable from '@/app/dashboard/components/SalesTable'
import SummaryPanel from '@/app/dashboard/components/SummaryPanel'

// Componente principal Dashboard que exibe o painel de vendas
export default function Dashboard() {
  // Estado para armazenar os dados de vendas
  const [sales, setSales] = useState([])

  useEffect(() => {
    // Recupera os dados de vendas do localStorage 
    const salesData = JSON.parse(localStorage.getItem('vendas')) || []
    setSales(salesData) // Atualiza o estado com os dados recuperados
  }, []) // O array vazio significa que isso acontece apenas uma vez após o primeiro render

  return (
    // Componente Pagina encapsula todo o conteúdo da página e recebe um título
    <Pagina titulo="Dashboard de Vendas de Veículos">
      <Row>
        {/* Painel de Resumo das Vendas  */}
        <Col md={4}>
          <SummaryPanel sales={sales} /> {/* Passa os dados de vendas para o SummaryPanel */}
        </Col>
        
        {/* Gráfico de Vendas  */}
        <Col md={8}>
          <SalesChart sales={sales} /> {/* Passa os dados de vendas para o SalesChart */}
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Tabela de Vendas - ocupa toda a largura disponível */}
        <Col>
          <SalesTable sales={sales} /> {/* Passa os dados de vendas para o SalesTable */}
        </Col>
      </Row>
    </Pagina>
  )
}
