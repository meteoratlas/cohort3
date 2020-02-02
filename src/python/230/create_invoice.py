from openpyxl import Workbook, load_workbook
import datetime
import json
import process_db

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


if __name__ == "__main__":
    data = process_db.read_workbook("data.xlsx")
    # makeJSON(data)
    # create_invoice(data)