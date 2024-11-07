'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function VeiculosPage() {

  const [veiculos, setVeiculos] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const veiculosLocalStorage = JSON.parse(localStorage.getItem("veiculos")) || []
    // guarda a lista no estado
    setVeiculos(veiculosLocalStorage)
    console.log(veiculosLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(veiculo) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir o veiculo ${veiculo.nome}?`)) {
      // filtra a lista antiga removando o professor recebido
      const novaLista = veiculos.filter(item => item.id !== veiculo.id)
      // grava no localStorage a nova lista
      localStorage.setItem('veiculos', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setVeiculos(novaLista)
      alert("Veiculo excluído com sucesso!")
    }
  }


  return (
    <Pagina titulo={""}>
      <div className='text-end mb-2'>
        <Button href='/veiculos/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os Professores */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>modelo</th>
            <th>Ano</th>
            <th>Quilometragem</th>
            <th>combustivel</th>
            <th>Placa</th>
            <th>cor</th>
            <th>tipo</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(veiculo => {
            return (
              <tr>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.ano}</td>
                <td>{veiculo.combustivel}</td>
                <td>{veiculo.placa}</td>
                <td>{veiculo.cor}</td>
                <td>{veiculo.tipo}</td>
                <td>{veiculo.status}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/veiculos/form?id=${veiculos.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(veiculo)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}