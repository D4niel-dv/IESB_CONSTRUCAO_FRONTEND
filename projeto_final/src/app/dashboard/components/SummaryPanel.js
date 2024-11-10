// /app/dashboard/components/SummaryPanel.js

import { Card } from 'react-bootstrap'

export default function SummaryPanel({ sales }) {
  const totalSales = sales.length
  const totalValue = sales.reduce((acc, sale) => acc + parseFloat(sale.veiculoPreco), 0)
  const averageValue = totalValue / totalSales || 0

  return (
    <Card>
      <Card.Body>
        <Card.Title>Resumo das Vendas</Card.Title>
        <Card.Text><strong>Total de Vendas:</strong> {totalSales}</Card.Text>
        <Card.Text><strong>Valor Total:</strong> R${totalValue.toFixed(2)}</Card.Text>
        <Card.Text><strong>Valor Médio:</strong> R${averageValue.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  )
}
