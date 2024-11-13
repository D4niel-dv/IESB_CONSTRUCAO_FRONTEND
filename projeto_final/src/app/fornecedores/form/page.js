'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import {ReactInputMask} from "react-input-mask"
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function FornecedorFormPage(props) {

  // router -> hook para navegação de telas
  const router = useRouter()

  // Busca a lista de fornecedores para usar no localStorage
  const fornecedores = JSON.parse(localStorage.getItem('fornecedores')) || []

  // Recuperando id para edição
  const id = props.searchParams.id
  console.log(props.searchParams.id)
  // Buscar na lista o fornecedor com o ID recebido no parametro
  const fornecedorEditado = fornecedores.find(item => item.id == id)
  console.log(fornecedorEditado)

  // função para salvar os dados do form
  function salvar(dados) {
    // Se fornecedorEditado existe, mudar os dados e gravar no localStorage
    if (fornecedorEditado) {
      Object.assign(fornecedorEditado, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    } else {
      // Se fornecedorEditado não existe, é criação de um novo
      dados.id = v4() // Gerar um ID único
      fornecedores.push(dados) // Adiciona o novo fornecedor na lista
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    }

    alert("Fornecedor cadastrado com sucesso!")
    router.push("/fornecedores")
  }

  // Campos do form e valores iniciais(default)
  const initialValues = {
    nome: '',
    cnpj: '',
    telefone: '',
    email: '',
    endereco: '',
    dataInicio: '',
    status: '',
    responsavel: '',
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    cnpj: Yup.string().required("Campo obrigatório").matches(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido"),
    telefone: Yup.string()
    .required("Campo obrigatório")
    .matches(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/, "Telefone inválido. Use o formato XX XXXX-XXXX ou (XX) XXXXX-XXXX"),
  
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    dataInicio: Yup.date().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
    responsavel: Yup.string().required("Campo obrigatório"),
  })

  return (
    <Pagina titulo={"Cadastro de Fornecedor"}>

      {/* Formulário */}
      <Formik
        initialValues={fornecedorEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {
          // Os valores e funções do formik
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {/* Campos do formulário */}
                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Nome da Empresa:</Form.Label>
                    <Form.Control
                      name='nome'
                      type='text'
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nome && !errors.nome}
                      isInvalid={touched.nome && errors.nome}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>CNPJ:</Form.Label>
                    <Form.Control as={ReactInputMask}
                      name='cnpj'
                      type='text'
                      mask={'99.999.999/9999-99'}
                      placeholder='99.999.999/9999-99'
                      maxLength={18}
                      value={values.cnpj}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.cnpj && !errors.cnpj}
                      isInvalid={touched.cnpj && errors.cnpj}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.cnpj}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control
                      name='telefone'
                      type='text'
                      value={values.telefone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.telefone && !errors.telefone}
                      isInvalid={touched.telefone && errors.telefone}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      name='email'
                      type='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control
                      name='endereco'
                      type='text'
                      value={values.endereco}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.endereco && !errors.endereco}
                      isInvalid={touched.endereco && errors.endereco}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.endereco}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Data de Início de Fornecimento:</Form.Label>
                    <Form.Control
                      name='dataInicio'
                      type='date'
                      value={values.dataInicio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.dataInicio && !errors.dataInicio}
                      isInvalid={touched.dataInicio && errors.dataInicio}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.dataInicio}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Status da Parceria:</Form.Label>
                    <Form.Select
                      name='status'
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.status && !errors.status}
                      isInvalid={touched.status && errors.status}
                    >
                      <option value=''>Selecione</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Responsável:</Form.Label>
                    <Form.Control
                      name='responsavel'
                      type='text'
                      value={values.responsavel}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.responsavel && !errors.responsavel}
                      isInvalid={touched.responsavel && errors.responsavel}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.responsavel}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* Botões */}
                <Form.Group className='text-end'>
                  <Button className='me-2' href='/fornecedores'><FaArrowLeft /> Voltar</Button>
                  <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
                </Form.Group>
              </Form>
            )
          }
        }
      </Formik>
    </Pagina>
  )
}
