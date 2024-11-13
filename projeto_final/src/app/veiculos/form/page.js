'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function VeiculoFormPage(props) {

  // router -> hook para navegação de telas
  const router = useRouter()

  // Busca a lista de veículos para usar no localStorage
  const veiculos = JSON.parse(localStorage.getItem('veiculos')) || []
  

  // Recuperando id para edição
  const id = props.searchParams.id
  console.log(props.searchParams.id)
  // Buscar na lista o veículo com o ID recebido no parametro
  const veiculoEditado = veiculos.find(item => item.id == id)
  console.log(veiculoEditado)

  // função para salvar os dados do form
  function salvar(dados) {
    // Se veiculoEditado existe, mudar os dados e gravar no localStorage
    if (veiculoEditado) {
      Object.assign(veiculoEditado, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('veiculos', JSON.stringify(veiculos))
    } else {
      // Se veiculoEditado não existe, é criação de um novo
      dados.id = v4() // Gerar um ID único
      veiculos.push(dados) // Adiciona o novo veículo na lista
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('veiculos', JSON.stringify(veiculos))
    }

    alert("Veículo cadastrado com sucesso!")
    router.push("/veiculos")
  }

  // Campos do form e valores iniciais(default)
  const initialValues = {
    modelo: '',
    placa: '',
    ano: '',
    cor: '',
    quilometragem: '',
    tipo: '',
    combustivel: '',
    status: '',
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    modelo: Yup.string().required("Campo obrigatório"),
    placa: Yup.string().required("Campo obrigatório"),
    ano: Yup.number().required("Campo obrigatório").min(1900, "Ano inválido").max(new Date().getFullYear(), "Ano inválido"),
    cor: Yup.string().required("Campo obrigatório"),
    quilometragem: Yup.number().required("Campo obrigatório").positive("Deve ser um número positivo"),
    tipo: Yup.string().required("Campo obrigatório"),
    combustivel: Yup.string().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
  })

  return (
    <Pagina titulo={"Cadastro de Veículo"}>

      {/* Formulário */}
      <Formik
        initialValues={veiculoEditado || initialValues}
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
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control
                      name='modelo'
                      type='text'
                      value={values.modelo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.modelo && !errors.modelo}
                      isInvalid={touched.modelo && errors.modelo}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.modelo}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Placa:</Form.Label>
                    <Form.Control
                      name='placa'
                      type='text'
                      value={values.placa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.placa && !errors.placa}
                      isInvalid={touched.placa && errors.placa}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.placa}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control
                      name='ano'
                      type='number'
                      value={values.ano}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.ano && !errors.ano}
                      isInvalid={touched.ano && errors.ano}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.ano}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control
                      name='cor'
                      type='text'
                      value={values.cor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.cor && !errors.cor}
                      isInvalid={touched.cor && errors.cor}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.cor}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Quilometragem:</Form.Label>
                    <Form.Control
                      name='quilometragem'
                      type='number'
                      value={values.quilometragem}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.quilometragem && !errors.quilometragem}
                      isInvalid={touched.quilometragem && errors.quilometragem}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.quilometragem}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Select
                      name='tipo'
                      value={values.tipo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.tipo && !errors.tipo}
                      isInvalid={touched.tipo && errors.tipo}
                    >
                      <option value=''>Selecione</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatch">Hatch</option>
                      <option value="Pick-up">Pick-up</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.tipo}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Combustível:</Form.Label>
                    <Form.Select
                      name='combustivel'
                      value={values.combustivel}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.combustivel && !errors.combustivel}
                      isInvalid={touched.combustivel && errors.combustivel}
                    >
                      <option value=''>Selecione</option>
                      <option value="Gasolina">Gasolina</option>
                      <option value="Álcool">Álcool</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Elétrico">Elétrico</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.combustivel}</Form.Control.Feedback>
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
                      <option value="Disponível">Disponível</option>
                      <option value="Indisponível">Indisponível</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* Botões */}
                <Form.Group className='text-end'>
                  <Button className='me-2' href='/veiculos'><FaArrowLeft /> Voltar</Button>
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
