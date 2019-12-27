import sys

def determine_taxes_owed(income, tax_scheme):
  amountOwed = 0
  remainder = income
  brackets = tax_scheme.values()

  for i in brackets:
    if income > i["taxable"]:
      amountOwed += i["taxable"] * i["rate"]
      income -= i["taxable"]
      remainder = income
    else:
      amountOwed += remainder * i["rate"]
      return round(amountOwed * 100) / 100

taxBrackets = {
  "first": {
    "taxable": 47630,
    "rate": 0.15
  },
  "second": {
    "taxable": 47629,
    "rate": 0.205
  },
  "third": {
    "taxable": 52408,
    "rate": 0.26
  },
  "fourth": {
    "taxable": 62704,
    "rate": 0.29
  },
  "fifth": {
    "taxable": sys.maxsize, # any remaining income
    "rate": 0.33
  }
}