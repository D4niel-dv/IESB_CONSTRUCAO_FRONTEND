// armazena funçoes logicas

export function getTotalSales(sales) {
    return sales.length
  }
  
  export function getTotalRevenue(sales) {
    return sales.reduce((acc, sale) => acc + parseFloat(sale.veiculoPreco), 0) //Soma o preço de todas as vendas
  }
  
  export function getAveragePrice(sales) { //Calcula o preço médio das vendas, dividindo a receita total pelo número de vendas.
    const totalValue = getTotalRevenue(sales)
    return totalValue / getTotalSales(sales) || 0 //Retorna o número total de vendas
  }
  