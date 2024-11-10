'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function VendaVeiculoFormPage(props) {

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

  // função para salvar os dados do form
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
    router.push("/venda-veiculo")
  }

  // Campos do form e valores iniciais (default)
  const initialValues = {
    compradorNome: '',
    compradorCpf: '',
    compradorEmail: '',
    veiculoMarca: '',
    veiculoModelo: '',
    veiculoAno: '',
    veiculoPlaca: '',
    veiculoPreco: ''
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    compradorNome: Yup.string().required("Campo obrigatório"),
    compradorCpf: Yup.string().required("Campo obrigatório"),
    compradorEmail: Yup.string().email("Email inválido").required("Campo obrigatório"),
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
            <Form onSubmit={handleSubmit}>
              {/* Dados do Comprador */}
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Nome do Comprador:</Form.Label>
                  <Form.Control
                    name='compradorNome'
                    type='text'
                    value={values.compradorNome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.compradorNome && !errors.compradorNome}
                    isInvalid={touched.compradorNome && errors.compradorNome}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.compradorNome}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>CPF do Comprador:</Form.Label>
                  <Form.Control
                    name='compradorCpf'
                    type='text'
                    value={values.compradorCpf}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.compradorCpf && !errors.compradorCpf}
                    isInvalid={touched.compradorCpf && errors.compradorCpf}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.compradorCpf}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Email do Comprador:</Form.Label>
                  <Form.Control
                    name='compradorEmail'
                    type='email'
                    value={values.compradorEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.compradorEmail && !errors.compradorEmail}
                    isInvalid={touched.compradorEmail && errors.compradorEmail}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.compradorEmail}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* Dados do Veículo */}
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Marca do Veículo:</Form.Label>
                  <Form.Control
                    name='veiculoMarca'
                    type='text'
                    value={values.veiculoMarca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoMarca && !errors.veiculoMarca}
                    isInvalid={touched.veiculoMarca && errors.veiculoMarca}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.veiculoMarca}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Modelo do Veículo:</Form.Label>
                  <Form.Control
                    name='veiculoModelo'
                    type='text'
                    value={values.veiculoModelo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoModelo && !errors.veiculoModelo}
                    isInvalid={touched.veiculoModelo && errors.veiculoModelo}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.veiculoModelo}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Ano do Veículo:</Form.Label>
                  <Form.Control
                    name='veiculoAno'
                    type='text'
                    value={values.veiculoAno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoAno && !errors.veiculoAno}
                    isInvalid={touched.veiculoAno && errors.veiculoAno}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.veiculoAno}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Placa do Veículo:</Form.Label>
                  <Form.Control
                    name='veiculoPlaca'
                    type='text'
                    value={values.veiculoPlaca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.veiculoPlaca && !errors.veiculoPlaca}
                    isInvalid={touched.veiculoPlaca && errors.veiculoPlaca}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.veiculoPlaca}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* Preço do Veículo */}
              <Row className="mb-3">
  <Form.Group as={Col}>
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
        step="0.01" // Permite inserir valores com casas decimais
        min="0" // Garante que o valor seja maior ou igual a zero
      />
      <Form.Control.Feedback type="invalid">{errors.veiculoPreco}</Form.Control.Feedback>
    </div>
  </Form.Group>
</Row>


              {/* Botões */}
              <Form.Group className='text-end'>
                <Button className='me-2' href='/venda-veiculo'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>

    </Pagina>
  )
}
