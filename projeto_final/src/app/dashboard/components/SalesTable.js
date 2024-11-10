// /app/dashboard/components/SalesTable.js

import { Table } from 'react-bootstrap'

export default function SalesTable({ sales }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Comprador</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr key={index}>
            <td>{sale.compradorNome}</td>
            <td>{sale.veiculoMarca}</td>
            <td>{sale.veiculoModelo}</td>
            <td>{sale.veiculoAno}</td>
            <td>{sale.veiculoPlaca}</td>
            <td>{sale.veiculoPreco}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
