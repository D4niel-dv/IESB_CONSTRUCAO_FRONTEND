'use client'

import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function FornecedoresPage() {

  const [fornecedores, setFornecedores] = useState([])  // Atualizando a variável para 'fornecedores'

  // Carrega a lista de fornecedores do localStorage ou inicia com um array vazio
  useEffect(() => {
    const fornecedoresLocalStorage = JSON.parse(localStorage.getItem("fornecedores")) || []
    setFornecedores(fornecedoresLocalStorage)  // Alterado para setFornecedores
    console.log(fornecedoresLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(fornecedor) {
    if (window.confirm(`Deseja realmente excluir o fornecedor ${fornecedor.nome}?`)) {
      const novaLista = fornecedores.filter(item => item.id !== fornecedor.id)  // Alterado para 'fornecedores'
      localStorage.setItem('fornecedores', JSON.stringify(novaLista))  // Alterado para 'fornecedores'
      setFornecedores(novaLista)  // Alterado para 'setFornecedores'
      alert("Fornecedor excluído com sucesso!")
    }
  }

  return (
    <Pagina titulo={"Formulários dos Fornecedores"}>
      <div className='text-end mb-2'>
        <Button href='/fornecedores/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome da Empresa</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cnpj</th>
            <th>Data de Início de Fornecimento</th>
            <th>Status da Parceria</th>
            <th>Endereço</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map(fornecedor => {
            return (
              <tr key={fornecedor.id}> {/* Adicionando a chave única */}
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.email}</td>
                <td>{fornecedor.telefone}</td>
                <td>{fornecedor.cnpj}</td>  {/* Alterando para 'cnpj' */}
                <td>{fornecedor.dataInicio}</td>  {/* Alterando para 'dataInicio' */}
                <td>{fornecedor.status}</td>  {/* Alterando para 'status' */}
                <td>{fornecedor.endereco}</td>
                <td>{fornecedor.responsavel}</td>  {/* Alterando para 'responsavel' */}
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/fornecedores/form?id=${fornecedor.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(fornecedor)}><FaTrash /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Pagina>
  )
}
