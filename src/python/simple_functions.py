import sys

def email(first_name, last_name):
    if type(first_name) is not str or type(last_name) is not str:
        return None
    return first_name.casefold() + "." + last_name.casefold() + "@evolveu.ca"

def determineTaxesOwed(amount, brackets):
    return None

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