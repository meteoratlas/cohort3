import csv

total_lines = 0
res_by_class = {}
res_line_nums = {}
res_by_sector = {}
sector_line_nums = {}
with open("Census_by_Community_2018.csv", "r") as f:
    reader = csv.DictReader(f)
    # by class
    for row in reader:
        try:
            res_by_class[row["CLASS"]] += int(row["RES_CNT"])
            res_line_nums[row["CLASS"]] += 1
        except KeyError:
            res_by_class[row["CLASS"]] = int(row["RES_CNT"])
            res_line_nums[row["CLASS"]] = 1
    # by sector
        try:
            res_by_sector[row["SECTOR"]] += int(row["RES_CNT"])
            sector_line_nums[row["SECTOR"]] += 1
        except KeyError:
            res_by_sector[row["SECTOR"]] = int(row["RES_CNT"])
            sector_line_nums[row["SECTOR"]] = 1

    report =  "===========================================================\n"
    report += "================= RESIDENCY CENSUS REPORT =================\n"
    report += "===========================================================\n\n"
    report += "-----------------------------------------------------------\n"
    report += "----------------- Residency by Class ----------------------\n"
    report += "-----------------------------------------------------------\n"
    report += "Class".ljust(25) + "Population".ljust(25) + "Line Numbers\n"
    
    for (k, v) in res_by_class.items():
        report += (f"{str(k).ljust(25)}{str(v).ljust(25)}{res_line_nums[k]}\n")

    report += "\n"
    report += "-----------------------------------------------------------\n"
    report += "----------------- Residency by Sector ---------------------\n"
    report += "-----------------------------------------------------------\n"
    report += "Sector".ljust(25) + "Population".ljust(25) + "Line Numbers\n"

    for (k, v) in res_by_sector.items():
        report += (f"{str(k).ljust(25)}{str(v).ljust(25)}{sector_line_nums[k]}\n")

    with open("Residency Report.txt", "w") as txt:
        txt.write(report)