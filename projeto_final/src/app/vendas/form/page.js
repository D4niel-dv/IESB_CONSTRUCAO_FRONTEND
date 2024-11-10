'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function VendasVeiculoFormPage(props) {

  // router -> hook para navegação de telas
  const router = useRouter()

  // Busca a lista de vendas no localStorage
  const vendas = JSON.parse(localStorage.getItem('vendas')) || []

  // Recuperando id para edição
  const id = props.searchParams.id
  console.log(props.searchParams.id)
  // Buscar na lista a venda com o ID recebido no parametro
  const vendaEditada = vendas.find(item => item.id == id)
  console.log(vendaEditada)

  // Função para salvar os dados do form
  function salvar(dados) {
    // Se vendaEditada existe, mudar os dados e gravar no localStorage
    if (vendaEditada) {
      Object.assign(vendaEditada, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('vendas', JSON.stringify(vendas))
    } else {
      // Se vendaEditada não existe, é criação de uma nova venda
      dados.id = v4()  // Gerar um ID único para a venda
      vendas.push(dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('vendas', JSON.stringify(vendas))
    }

    alert("Venda cadastrada com sucesso!")
    router.push("/vendas")
  }

  // Campos do form e valores iniciais (default)
  const initialValues = {
    nomeComprador: '',
    cpfComprador: '',
    emailComprador: '',
    veiculoMarca: '',
    veiculoModelo: '',
    veiculoAno: '',
    veiculoPlaca: '',
    veiculoPreco: ''
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    nomeComprador: Yup.string().required("Campo obrigatório"),
    cpfComprador: Yup.string().required("Campo obrigatório"),
    emailComprador: Yup.string().email("Email inválido").required("Campo obrigatório"),
    veiculoMarca: Yup.string().required("Campo obrigatório"),
    veiculoModelo: Yup.string().required("Campo obrigatório"),
    veiculoAno: Yup.string().required("Campo obrigatório"),
    veiculoPlaca: Yup.string().required("Campo obrigatório"),
    veiculoPreco: Yup.number().required("Campo obrigatório").positive("Preço deve ser positivo")
  })

  return (
    <Pagina titulo={"Cadastro de Venda de Veículo"}>

      {/* Formulário */}
      <Formik
        initialValues={vendaEditada || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} className="form-container">
              {/* Dados do Comprador */}
              <Row className="mb-4">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Nome do Comprador:</Form.Label>
                  <Form.Control
                    name="nomeComprador"
                    type="text"
                    value={values.nomeComprador}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.nomeComprador && !errors.nomeComprador}
                    isInvalid={touched.nomeComprador && errors.nomeComprador}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.nomeComprador}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>CPF do Comprador:</Form.Label>
                  <Form.Control
                    name="cpfComprador"
                    type="text"
                    value={values.cpfComprador}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.cpfComprador && !errors.cpfComprador}
                    isInvalid={touched.cpfComprador && errors.cpfComprador}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.cpfComprador}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Email do Comprador:</Form.Label>
                  <Form.Control
                    name="emailComprador"
                    type="email"
                    value={values.emailComprador}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.emailComprador && !errors.emailComprador}
                    isInvalid={touched.emailComprador && errors.emailComprador}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.emailComprador}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* Dados do Veículo */}
              <Row className="mb-4">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Marca do Veículo:</Form.Label>
                  <Form.Control
                    name="veiculoMarca"
                    type="text"
                    value={values.veiculoMarca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoMarca && !errors.veiculoMarca}
                    isInvalid={touched.veiculoMarca && errors.veiculoMarca}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.veiculoMarca}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>Modelo do Veículo:</Form.Label>
                  <Form.Control
                    name="veiculoModelo"
                    type="text"
                    value={values.veiculoModelo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoModelo && !errors.veiculoModelo}
                    isInvalid={touched.veiculoModelo && errors.veiculoModelo}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.veiculoModelo}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Ano do Veículo:</Form.Label>
                  <Form.Control
                    name="veiculoAno"
                    type="text"
                    value={values.veiculoAno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoAno && !errors.veiculoAno}
                    isInvalid={touched.veiculoAno && errors.veiculoAno}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.veiculoAno}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>Placa do Veículo:</Form.Label>
                  <Form.Control
                    name="veiculoPlaca"
                    type="text"
                    value={values.veiculoPlaca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoPlaca && !errors.veiculoPlaca}
                    isInvalid={touched.veiculoPlaca && errors.veiculoPlaca}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">{errors.veiculoPlaca}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* Preço do Veículo */}
              <Row className="mb-4">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Preço do Veículo:</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">R$</span>
                    <Form.Control
                      name="veiculoPreco"
                      type="number"
                      value={values.veiculoPreco}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.veiculoPreco && !errors.veiculoPreco}
                      isInvalid={touched.veiculoPreco && errors.veiculoPreco}
                      placeholder="Informe o preço do veículo"
                      step="0.01"
                      min="0"
                      className="form-control-lg"
                    />
                    <Form.Control.Feedback type="invalid">{errors.veiculoPreco}</Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Row>

              {/* Botões */}
              <Form.Group className="text-end">
                <Button className="me-2" href="/vendas"><FaArrowLeft /> Voltar</Button>
                <Button type="submit" variant="success"><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>

    </Pagina>
  )
}
