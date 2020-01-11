import csv
from collections import defaultdict

def read_file(csv_file, columns):
    with open(csv_file, "r") as f:
        result = defaultdict(dict)
        lines = {}
        reader = csv.DictReader(f)
        for row in reader:
            for col in columns:
                try:
                    result[col][row[col]] += int(row["RES_CNT"])
                    lines[row[col]] += 1
                except KeyError:
                    result[col][row[col]] = int(row["RES_CNT"])
                    lines[row[col]] = 1
    return result, lines

def print_report(data, width, gutter = 5):
    col_width = int(width / len(data) - gutter)
    report =  "=" * width + "\n"
    report += " RESIDENCY CENSUS REPORT ".center(width, "=") + "\n"
    report += "=" * width + "\n"

    for i in data[0]:
        report += "\n"
        report += "-" * width + "\n"
        report += f" Residency by {i.title()} ".center(width, "-") + "\n"
        report += "-" * width + "\n"
        report += f"{i.title()}".ljust(col_width) + "Population".ljust(col_width) + "Lines\n\n"

        for (k, v) in data[0][i].items():
            report += f"{str(k).title().ljust(col_width)}{str(v).ljust(col_width)}{data[1][k]}\n"
            
    with open("Residency Report.txt", "w") as txt:
        txt.write(report)

data = read_file("Census_by_Community_2018.csv", ["CLASS", "SECTOR"])
print_report(data, 60) # report width of 60 characters