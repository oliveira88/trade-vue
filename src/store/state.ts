export interface ExampleStateInterface {
  dinheiroDisponivel: number;
  totalInvestido: number;
  usuario: {
    nome: string;
    cpf: string;
    dinheiroDisponivel: number;
    totalInvestido: number;
  };
  empresas: Array<{
    nome: string;
    qtdAcoes: number;
    valorUnitario: number;
  }>;
}

function state(): ExampleStateInterface {
  return {
    usuario: {},
    empresas: [],
  }
}

export default state;
