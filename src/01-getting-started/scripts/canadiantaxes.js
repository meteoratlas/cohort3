function determineTaxesOwed(income, taxScheme) {
  let amountOwed = 0;
  let remainder = income;
  let brackets = Object.values(taxScheme);

  for (let i = 0; i < brackets.length; i++) {
    if (income > brackets[i]["taxable"]) {
      amountOwed += brackets[i]["taxable"] * brackets[i]["rate"];
      income -= brackets[i]["taxable"];
      remainder = income;
    } else {
      let result = (amountOwed += remainder * brackets[i]["rate"]);
      return Math.round(result * 100) / 100; // Round to hundredth decimal place
    }
  }
}

const taxBrackets = {
  first: {
    taxable: 47630,
    rate: 0.15
  },
  second: {
    taxable: 47629,
    rate: 0.205
  },
  third: {
    taxable: 52408,
    rate: 0.26
  },
  fourth: {
    taxable: 62704,
    rate: 0.29
  },
  fifth: {
    taxable: Number.MAX_VALUE, // any remaining income
    rate: 0.33
  }
};

export { determineTaxesOwed, taxBrackets };
