import sqlite3

connection = sqlite3.connect("data.db")

cursor = connection.cursor()

create_table = "CREATE TABLE users (id int, username text, password text)"
cursor.execute(create_table)

user = (1, "Kim", "password123")

users = [
    (2, "RE", "password124"),
    (3, "Lena", "pswerd"),
    (4, "Jim", "1234")
]

insert_query = "INSERT INTO users VALUES(?,?,?)"
cursor.execute(insert_query, user)
cursor.executemany(insert_query, users)

select_query = "SELECT * FROM users"
for row in cursor.execute(select_query):
    print(row)

connection.commit()
connection.close()