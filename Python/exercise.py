input1 = int(input("Enter the first number: "))
input2 = int(input("Enter the second number: "))

print(f"The sum of {input1} and {input2} is {input1+input2}.")

print(f"The difference of {input1} and {input2} is {input1-input2}.")
 
print(f"The product of {input1} and {input2} is {input1*input2}.")

print(f"The division of {input1} and {input2} is {input1/input2}.")



import math


perpendicular = int(input("Enter perpendicular: "))
base = int(input("Enter base: "))
hypotenuse = math.sqrt(pow(perpendicular,2) + pow(base,2))
print(hypotenuse)
