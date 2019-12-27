import sys

def email(first_name, last_name):
    if type(first_name) is not str or type(last_name) is not str:
        return None
    return first_name.casefold() + "." + last_name.casefold() + "@evolveu.ca"
