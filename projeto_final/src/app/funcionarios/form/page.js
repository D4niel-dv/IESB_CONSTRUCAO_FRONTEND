'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function FuncionariosFormPage(props) {

  // router -> hook para navegação de telas
  const router = useRouter()

  // Buscar a lista de funcionários no localStorage
  const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || []

  // Recuperando id para edição
  const id = props.searchParams.id
  console.log(props.searchParams.id)
  // Buscar na lista o funcionário com o ID recebido no parametro
  const funcionarioEditado = funcionarios.find(item => item.id == id)
  console.log(funcionarioEditado)

  // Função para salvar os dados do formulário
  function salvar(dados) {
    // Se funcionarioEditado existe, mudar os dados e gravar no localStorage
    if (funcionarioEditado) {
      Object.assign(funcionarioEditado, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    } else {
      // Se funcionarioEditado não existe, é criação de um novo
      // Gerar um ID (Identificador único)
      dados.id = v4()
      // Adiciona o novo funcionário na lista
      funcionarios.push(dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    alert("Funcionário salvo com sucesso!")
    router.push("/funcionarios")
  }

  // Campos do formulário e valores iniciais (default)
  const initialValues = {
    nome: '',
    dataNascimento: '',
    matricula: '',
    status: '',
    cargo: '',
    telefone: '',
    endereco: '',
    email: '',
    curso: '',
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dataNascimento: Yup.date().required("Campo obrigatório"),
    matricula: Yup.string().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
    cargo: Yup.string().required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    curso: Yup.string().required("Campo obrigatório"),
  })

  // Definindo opções fixas para o campo "Curso"
  const cursos = [
    { id: '1', nome: 'Curso de TI' },
    { id: '2', nome: 'Curso de Administração' },
    { id: '3', nome: 'Curso de Marketing' },
    { id: '4', nome: 'Curso de Design' },
    { id: '5', nome: 'Curso de Psicologia' },
    { id: '6', nome: 'Curso de Engenharia' }
  ]

  return (
    <Pagina titulo={"Cadastro de Funcionários"}>

      {/* Formulário */}

      <Formik
        initialValues={funcionarioEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {/* Campos do formulário */}
            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
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
                <Form.Label>Data de Nascimento:</Form.Label>
                <Form.Control
                  name='dataNascimento'
                  type='date'
                  value={values.dataNascimento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.dataNascimento && !errors.dataNascimento}
                  isInvalid={touched.dataNascimento && errors.dataNascimento}
                />
                <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Matrícula:</Form.Label>
                <Form.Control
                  name='matricula'
                  type='text'
                  value={values.matricula}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.matricula && !errors.matricula}
                  isInvalid={touched.matricula && errors.matricula}
                />
                <Form.Control.Feedback type='invalid'>{errors.matricula}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Status:</Form.Label>
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
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Cargo:</Form.Label>
                <Form.Control
                  name='cargo'
                  type='text'
                  value={values.cargo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.cargo && !errors.cargo}
                  isInvalid={touched.cargo && errors.cargo}
                />
                <Form.Control.Feedback type='invalid'>{errors.cargo}</Form.Control.Feedback>
              </Form.Group>

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
                <Form.Label>Curso:</Form.Label>
                <Form.Select
                  name='curso'
                  value={values.curso}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.curso && !errors.curso}
                  isInvalid={touched.curso && errors.curso}
                >
                  <option value=''>Selecione</option>
                  {cursos.map(curso => <option key={curso.id} value={curso.nome}>{curso.nome}</option>)}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Botões */}
            <Form.Group className='text-end'>
              <Button className='me-2' href='/funcionarios'><FaArrowLeft /> Voltar</Button>
              <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
            </Form.Group>

          </Form>
        )}
      </Formik>

    </Pagina>
  )
}
