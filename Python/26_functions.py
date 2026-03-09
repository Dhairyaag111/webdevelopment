# Functions in python are a block of code used to perform specific task whenever it is called.
# Function is defined by using a keyword "def".


# There are 2 types of functions in python:
#    i)  Built in function.
#    ii) User defined function.






def name():
    print("Dhairya Agrawal")

name()




def empty():    # Empty Function
    pass
empty()




def area(l,b):
    print(f"The area is {l*b}")
area(17,1)



def returing_value(a,b):
    return a*b
result = returing_value(17,1)
print(result)




first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")

def name_shower(a,b):
    return (f"{first_name.upper()} {last_name.upper()}")
output = name_shower(first_name,last_name)
print(output)