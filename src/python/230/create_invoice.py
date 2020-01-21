from openpyxl import Workbook, load_workbook

def read_workbook(file):
    book = load_workbook(file)
    sheet_dicts = []
    for sheet in book:
        data = {}
        titles = [t.value for t in sheet[1]]
        for i, row in enumerate(sheet.iter_rows(values_only=True)):
            # Skip column header row 
            if (i == 0):
                continue
            row_data = {}
            for j, info in enumerate(row):
                row_data[titles[j]] = info
            data[row_data[titles[0]]] = row_data
        sheet_dicts.append(data)
    return sheet_dicts

def get_row_by_id(id, column):
    [row] = filter(lambda x:x==id, column)
    return row

def create_invoice(data):
    # requested = input("Please enter an invoice id to generate (or any other value to quit): ")
    [customers, products, invoice_items, invoices] = data
    requested = 5
    try:
        requested = int(requested)
    except:
        print("Invalid input, quitting.")
    if requested < 0:
        print("Invalid input, quitting.")
    
data = read_workbook("data.xlsx")
create_invoice(data)