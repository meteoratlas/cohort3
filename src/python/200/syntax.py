# Define variables

def var_type(variable):
    if type(variable) is not str:
        return None
    var = variable.upper()
    if var == "STRING":
        return "This is a string"
    elif var == "INT":
        return 45
    elif var == "BOOLEAN":
        return True
    elif var == "FLOAT":
        return 23.1235
    elif var == "LIST":
        return [1,2,3,5]
    elif var == "TUPLE":
        return (1,2,3)
    else:
        return None

def if_else(num):
    if num == 1:
        return "num is one"
    elif num == 2:
        return "num is two"
    else:
        return "num is neither one or two"

def add_front(arr, toAdd):
    if not isinstance(arr, list):
        return arr
    arr.insert(0, toAdd)
    return arr

def add_back(arr, toAdd):
    if not isinstance(arr, list):
        return arr
    arr.append(toAdd)
    return arr

#  Update the values of an array using the map function
def update_values(func, arr):
    if not callable(func):
        return arr
    if not isinstance(arr, list):
        return arr
    result = map(func, arr)
    return list(result)

def for_loop(max):
    if type(max) is not int or max <= 0:
        return None
    s = ""
    for i in range(1, max + 1):
        s += str(i)
    return s

def for_in(arr):
    if not isinstance(arr, list):
        return arr
    s = ""
    for i in arr:
        s += str(i)
    return s

def while_loop(max):
    if type(max) is not int or max <= 0:
        return None
    s = ""
    i = 0
    while i < max:
        i += 1
        s += str(i)
    return s

def get_by_key(key, d):
    if not isinstance(d, dict):
        return "Object passed is not dictionary"
    if key in d.keys():
        return d[key]
    else:
        return "Key not in dictionary"