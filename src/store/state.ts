export interface ExampleStateInterface {
  dinheiroDisponivel: number;
  totalInvestido: number;
}

function state(): ExampleStateInterface {
  return {
    dinheiroDisponivel: 0,
    totalInvestido: 0,
  }
}

export default state;
