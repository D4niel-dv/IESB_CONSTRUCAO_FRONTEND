// /app/dashboard/components/SalesChart.js

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default function SalesChart({ sales }) {
  const salesByBrand = sales.reduce((acc, sale) => {
    const brand = sale.veiculoMarca
    if (acc[brand]) {
      acc[brand]++
    } else {
      acc[brand] = 1
    }
    return acc
  }, {})

  const data = {
    labels: Object.keys(salesByBrand),
    datasets: [{
      label: 'Vendas por Marca',
      data: Object.values(salesByBrand),
      backgroundColor: '#4e73df',
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Distribuição das Vendas por Marca'
      }
    }
  }

  return <Bar data={data} options={options} />
}
