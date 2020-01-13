from openpyxl import Workbook, load_workbook
from openpyxl.worksheet.datavalidation import DataValidation

isDate = DataValidation(type="date")
# IDs must be an int greater than 0, quantities
isPositiveInt = DataValidation(type="whole", 
                           operator="greaterThanOrEqual", 
                           formula1=0)
# For costs
isPositiveFloat = DataValidation(type="decimal", 
                                operator="greaterThanOrEqual", 
                                formula1=0)
# emails must be between 3 and 100 chars
isEmail = DataValidation(type="textLength",
                         operator="between",
                         formula1=3,
                         formula2=100)
# 15 digits is ITU-T max len
isPhoneNum = DataValidation(type="textLength",
                            operator="lessThanOrEqual",
                            formula1=15)
# for misc strings (first/last names, products, etc)
isLessThan50Chars = DataValidation(type="textLength",
                                   operator="lessThanOrEqual",
                                   formula1=50)
# converts True/False into 1/0, so validate for int equivalents
isBool = DataValidation(type="whole",
                        operator="between",
                        formula1=0,
                        formula2=1)

# maximum possible rows in a sheet
max_rows = 1048576

def makeDuplicateCheck(column_letter, sheet):
    # an excel function to check for duplicates, need to test it
    # https://www.ablebits.com/office-addins-blog/2013/10/20/prevent-duplicates-in-excel-column/

    formula = f"=COUNTIF(${column_letter}:${column_letter}, {column_letter}2) = 1"
    _range = f"{column_letter}2:{column_letter}{max_rows}"
    rule = DataValidation(type="custom", formula1=formula)
    rule.add(_range)
    sheet.add_data_validation(rule)

validators = {
    # customer sheet
    "first_name": isLessThan50Chars,
    "last_name": isLessThan50Chars,
    "phone_number": isPhoneNum,
    "email":isEmail,
    # products
    "name": isLessThan50Chars,
    "price": isPositiveFloat,
    # invoice items
    "product_id": isPositiveInt,
    "quantity": isPositiveInt,
    # invoices
    "invoice_item_id": isPositiveInt,
    "customer_id": isPositiveInt,
    "date":isDate,
    "total_cost":isPositiveFloat,
    "paid":isBool
    }

def validate_workbook(workbook):
    unique_id_per_sheet = {"Customers":"customer_id", "Products":"product_id", "Invoice Items":"invoice_item_id", "Invoices":"invoice_id"}
    for sheet in workbook:
        column_titles = sheet[1]
        for title in column_titles:
            if unique_id_per_sheet.get(sheet.title) == title.value: 
                cells = sheet[title.coordinate[0]]
                for i in cells:
                    # add cells to no duplicate validator
                    makeDuplicateCheck(title.coordinate[0], sheet)
            elif validators.get(title.value):
                col = title.coordinate[0]
                validators[title.value].add(f"{col}2:{col}{max_rows}")
                sheet.add_data_validation(validators[title.value])
    book.save(workbook)

book = load_workbook("invalid_data.xlsx")
validate_workbook(book)
