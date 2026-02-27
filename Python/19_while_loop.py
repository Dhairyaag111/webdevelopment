# name = input("Enter your name: ")
# while(len(name)==0):
#     print(f"Enter your valid name.")
#     name = input("Enter your name: ")
# print(f"Your name is {name}")






# num = int(input("Enter a number: "))
# while(num==0):
#     print("The number should not be 0")
#     num = int(input("Enter a number: "))
# if(num>0):
#     print(f"{num} is a positive number.")
# elif(num<0):
#     print(f"{num} is a negative number.")





hobby = input("Enter your hobby [q to quit]: ")
while(hobby.upper()!="Q"):
    print("Your hobby is {}".format(hobby))
    hobby = input("Enter your hobby [q to quit]: ")
print("You quited")