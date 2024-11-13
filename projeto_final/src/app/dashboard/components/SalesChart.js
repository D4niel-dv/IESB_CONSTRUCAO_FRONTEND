// que é utilizado para exibir gráficos de barras

import { Bar } from 'react-chartjs-2'

// Importa os componentes necessários do Chart.js para personalizar o gráfico
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Registra os componentes necessários do Chart.js para que possam ser usados no gráfico
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Componente SalesChart que recebe um array de vendas como props
export default function SalesChart({ sales }) {
  // Agrupa as vendas por marca de veículo e conta quantas vendas ocorreram para cada marca
  const salesByBrand = sales.reduce((acc, sale) => {
    const brand = sale.veiculoMarca // Obtém a marca do veículo
    // Se a marca já existe no acumulador, incrementa o contador
    if (acc[brand]) {
      acc[brand]++
    } else {
      // Caso a marca não exista, inicializa o contador em 1
      acc[brand] = 1
    }
    return acc // Retorna o acumulador para o próximo passo
  }, {})

  // Estrutura de dados para o gráfico, definindo os rótulos e os dados a serem exibidos
  const data = {
    labels: Object.keys(salesByBrand), // As marcas serão as labels no eixo X
    datasets: [{
      label: 'Vendas por Marca', // Nome do gráfico que aparecerá na legenda
      data: Object.values(salesByBrand), // O número de vendas para cada marca
      backgroundColor: '#FF5733', 
    }]
  }

  // Opções de configuração do gráfico, incluindo título e responsividade
  const options = {
    responsive: true, // Faz o gráfico se ajustar automaticamente ao tamanho da tela
    plugins: {
      title: {
        display: true, // Exibe o título do gráfico
        text: 'Distribuição das Vendas por Marca' // Define o texto do título
      }
    }
  }

  // Retorna o componente Bar do react-chartjs-2, passando os dados e as opções do gráfico
  return <Bar data={data} options={options} />
}
