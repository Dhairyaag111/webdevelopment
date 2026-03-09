


# Default argument (It takes the latest value):

def default_func(a=5,b=6):
    return  a+b
result = default_func(1,2)
print(result)





# Key word argument (We can pass the value though key word or variable): 


def name_show1(fName, mName = "" , lName = "Agrawal"):
    print(f"{fName}  {mName}  {lName}")
name_show1("Dhairya")



def name_show2(fName, mName = " " , lName = "Agrawal"):
    print(f"{fName}  {mName}  {lName}")
name_show2("Dhairya","","JPT")



def name_show3(fName, mName = "" , lName = "Agrawal"):
    print(f"{fName}  {mName}  {lName}")
name_show3(fName="Dhairya")



def name_show4(fName, mName = "" , lName = "Agrawal"):
    print(f"{fName}  {mName}  {lName}")
name_show4(lName="Agrawal",fName="Dhairya",mName="Prasad")






# Required Agrument (all the functions are required argument and it required the value mandatory): 


def subtractor(a,b):
    print(a-b)
subtractor(2,1)