// /app/dashboard/page.js

'use client'

import Pagina from '@/components/Pagina'
import { useState, useEffect } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import SalesChart from '@/app/dashboard/components/SalesChart'
import SalesTable from '@/app/dashboard/components/SalesTable'
import SummaryPanel from '@/app/dashboard/components/SummaryPanel'

export default function Dashboard() {
  const [sales, setSales] = useState([])

  useEffect(() => {
    // Fetching sales data from localStorage or an API
    const salesData = JSON.parse(localStorage.getItem('vendas')) || []
    setSales(salesData)
  }, [])

  return (
    <Pagina titulo="Dashboard de Vendas de Veículos">
      <Row>
        {/* Resumo das Vendas */}
        <Col md={4}>
          <SummaryPanel sales={sales} />
        </Col>
        
        {/* Gráficos de Vendas */}
        <Col md={8}>
          <SalesChart sales={sales} />
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Tabela de Vendas */}
        <Col>
          <SalesTable sales={sales} />
        </Col>
      </Row>
    </Pagina>
  )
}
