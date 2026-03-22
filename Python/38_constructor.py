# Constructor a special type of member function that is called automatically when an object is created, they help in initalization.
# There are two types of constructor in general:-
# i. Default
# ii.Parameter





# class Default:
#     def __init__(self):
#         print("These is a default constructor.")       
         
# obj = Default()







# class Parameterized:
#     def __init__(self,name,age):
#         print("This is parameterized constructor.")
#         self.my_name = name
#         self.my_age = age
#     def Display(self):
#         print(f"My name is {self.my_name} and I am {self.my_age} years old. ")
        
# obj = Parameterized("Dhairya",16)
# obj.Display()

# obj2 = Parameterized("Dhairya Agrawal",17)
# obj2.Display()






class area_calculator:
    def __init__(self,length,breadth,radius):
        self.length = length
        self.breadth = breadth
        self.radius = radius
    def rectangle(self):
        print(f"The area of rectangle is {self.length*self.breadth}")
    def circle(self):
        print(f"The area of circle is {self.radius*self.radius*3.1415}")
        
l = int(input("Enter length: "))
b = int(input("Enter breadth: "))
r = int(input("Enter radius: "))
obj = area_calculator(l,b,r)
obj.rectangle()    
obj.circle()   