// /lib/salesData.js

export function getTotalSales(sales) {
    return sales.length
  }
  
  export function getTotalRevenue(sales) {
    return sales.reduce((acc, sale) => acc + parseFloat(sale.veiculoPreco), 0)
  }
  
  export function getAveragePrice(sales) {
    const totalValue = getTotalRevenue(sales)
    return totalValue / getTotalSales(sales) || 0
  }
  