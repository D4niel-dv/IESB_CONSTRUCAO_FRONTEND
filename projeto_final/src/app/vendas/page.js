'use client'

import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function VendasPage() {  // Renomeei para VendasPage para indicar que estamos lidando com vendas

  const [vendas, setVendas] = useState([])  // Alterei 'clientes' para 'vendas', já que estamos tratando de vendas

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const vendasLocalStorage = JSON.parse(localStorage.getItem("vendas")) || []  // Buscando 'vendas' no localStorage
    // Guarda a lista no estado vendas
    setVendas(vendasLocalStorage)
    console.log(vendasLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(venda) {  // Alterei para 'venda' para se referir corretamente ao item
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir a venda de ${venda.nome}?`)) {  // Exibindo nome da venda
      const novaLista = vendas.filter(item => item.id !== venda.id)
      // Grava no localStorage a nova lista
      localStorage.setItem('vendas', JSON.stringify(novaLista))  // Armazenando a nova lista de vendas
      // Grava a nova lista no estado para renderizar na tela
      setVendas(novaLista)
      alert("Venda excluída com sucesso!")
    }
  }

  return (
    <Pagina titulo={"Formulários das Vendas"}>
      <div className='text-end mb-2'>
        <Button href='/vendas/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome Comprador</th>
            <th>Email Comprador</th>
            <th>Marca Veiculo</th>
            <th>Preço Veiculo</th>
            <th>Ano Veiculo</th>
            <th>CPF Comprador</th>
            <th>Placa Veiculo</th>
            <th>Modelo Veiculo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map(venda => {  // Aqui estamos usando 'vendas' corretamente
            return (
              <tr key={venda.id}> 
                <td>{venda.nomeComprador}</td> 
                <td>{venda.emailComprador}</td> 
                <td>{venda.veiculoMarca}</td> 
                <td>{venda.veiculoPreco}</td> 
                <td>{venda.veiculoAno}</td> 
                <td>{venda.cpfComprador}</td> 
                <td>{venda.veiculoPlaca}</td> 
                <td>{venda.veiculoModelo}</td> 
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/vendas/form?id=${venda.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(venda)}><FaTrash /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Pagina>
  )
}
