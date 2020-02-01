from openpyxl import Workbook, load_workbook
import datetime
import json

def read_workbook(file):
    book = load_workbook(file)
    sheet_dicts = {}
    for sheet in book:
        data = {}
        titles = [t.value for t in sheet[1]]
        for i, row in enumerate(sheet.iter_rows(values_only=True)):
            # Skip column header row 
            if (i == 0):
                continue
            row_data = {}
            for j, info in enumerate(row):
                if (j == 0): continue # skip primary key
                row_data[titles[j]] = info
            # uncomment the next line to include the primary key in the value dict, 
            # as well as the key:
            # data[row_data[titles[0]]] = row_data
            # use the primary id as key only:
            data[row[0]] = row_data
        sheet_dicts[sheet.title] = data
    return sheet_dicts

def create_invoice(data):
    requested = input("Please enter an invoice id to generate (or any other value to quit): ")
    [customers, products, invoice_items, invoices] = data
    try:
        requested = int(requested)
    except:
        print("Invalid input, quitting.")
    if requested < 0:
        print("Invalid input, quitting.")

    inv = invoices[requested]
    c_info = customers[inv["customer_id"]]
    inv_item_info = invoice_items[inv["invoice_item_id"]]
    product_info = products[inv_item_info["product_id"]]

    width = 80
    report =  "=" * width + "\n"
    report += " INVOICE ".center(width, "=") + "\n"
    report += "=" * width + "\n"

    report += f'{c_info["first_name"]} {c_info["last_name"]}\nCustomer ID # {c_info["customer_id"]}\n{c_info["phone_number"]}\n{c_info["email"]}\n'
    report += f'{ ( inv["date"]).strftime("%d/%m/%y")}\n'
    report += "-" * width + "\n"
    report += f'{product_info["name"]}\tQuantity: {inv_item_info["quantity"]}\n'
    report += f'Total cost: ${inv["total_cost"]}\n'

    with open("Invoice.txt", "w") as txt:
        txt.write(report)

def makeJSON(data):
    def dateToString(date):
        if isinstance(date, datetime.datetime):
            return date.__str__()

    with open("info.json", "w") as txt:
        txt.write(json.dumps(data, default = dateToString, indent=4, separators=(',', ': ')))

if __name__ == "__main__":
    data = read_workbook("data.xlsx")
    makeJSON(data)
    # create_invoice(data)