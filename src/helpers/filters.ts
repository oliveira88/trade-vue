const filters = {
  formatCurrency(value: number) {
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return formatter.format(value);
  }
}

export default filters;
