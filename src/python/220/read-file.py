total_lines = 0
total_else_statements = 0
total_characters = 0

with open("syntax.js",'r') as f:
    lines = f.readlines()
    f.seek(0)
    chars_ws = len(f.read())
total_lines = len(lines)

for l in lines:
    words = l.split()
    for w in words:
        if w == "else":
            total_else_statements += 1
        total_characters += len(w)

print("RESULTS:")
print("The amount of total lines in this file is: " + str(total_lines))
print("The amount of total else statements in this file is: " + str(total_else_statements))
print("The amount of total characters (not including whitespace) in this file is: " + str(total_characters))
# add total lines to include \n
print("The amount of total characters (including whitespace) in this file is: " + str(chars_ws + total_lines))