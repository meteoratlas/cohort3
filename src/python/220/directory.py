import os

file_count = 0
total_size = 0
with os.scandir() as files:
    for file in files:
        info = file.stat()
        file_count += 1
        total_size += info.st_size
        print("File: " + file.name + "  Size: " + str(info.st_size) + " bytes")

print("\n------------")
print("The total amount of files in this directory is: " + str(file_count)+ ".")
print("The total size of all these files is: " + str(total_size) + " bytes.")

