// Importa o componente Table da biblioteca react-bootstrap, que é usado para criar tabelas estilizadas
import { Table } from 'react-bootstrap'

// Componente SalesTable que recebe um array de vendas como props
export default function SalesTable({ sales }) {
  return (
    // A tabela é configurada para ter listras, bordas e efeito de hover nas linhas 
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* Cabeçalhos das colunas da tabela */}
          <th>Comprador</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapeia o array sales e cria uma linha para cada venda */}
        {sales.map((sale, index) => (
          <tr key={index}>
            {/* Exibe os dados de cada venda em células da tabela */}
            <td>{sale.nomeComprador}</td>
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
