# List in python are one of the most important data types. They are used to store multiple values.

# List are nothing but just an order collection of data where each elements are seperated by comma and are inclosed within a square brackets.

# List in python are mutable. (i.e they can be updated later.)




vegetables = ["potato", "tomato", "cucumber", "spanich", "eggplant" , "brinjal", "ladyfinger", "tomato"]
# print(vegetables[1:5])
# print(vegetables[-3:-1])

# for vegetable in vegetables:
#     print(vegetable)

# vegetables[0] = "dhairya"
# print(vegetables)

# print("brinjal" in vegetables)



# Some methods in list


# vegetables.append("yam")   # It adds at the end of the list.
# print(vegetables)


# vegetables.remove("ladyfinger")   # It removes.
# print(vegetables)



# vegetables.insert(7,"orca")      # It adds beside the index given.
# print(vegetables)



# vegetables.sort()    # It sort elements according to alphabetical order.
# print(vegetables)



# vegetables.reverse()    # It reverses the list.
# print(vegetables)



# vegetables.clear()      # It makes the list empty.
# print(vegetables)



# print(vegetables.index("tomato"))   # It shows the index of particular element.



# print(vegetables.count("tomato"))   # It counts how many perticular elements are there.





# fruits = []
# userInput = input("Enter any fruit name: (q to quit): ").upper()
# while(userInput!="Q"):
#     fruits.append(userInput)
#     print(fruits)
#     check = input("Do you wan't to remove fruits(y/n): ").upper()
#     if(check=="Y"):
#         rem = input("What do you wan't to remove?: ").upper()
#         while(fruits.count(rem)==0):
#             print(f"{rem.capitalize()} is not there in the list")
#             rem = input("What do you wan't to remove?: ").upper()
#         fruits.remove(rem)       
#         print(fruits)
#     userInput = input("Enter any fruit name: (q to quit): ").upper()
# if(len(fruits)!=0):
#     print(fruits)
# print("You quited.")








    
    

# Banking simulator


# account = []
# out = 0
# inp = 0
# userInput = input("Press W for withdraw, D for deposit (Q to quit): ").upper()  
# while(userInput!="Q"):
#     if (userInput == "D"):
#         deposit = int(input("Enter money to deposit: "))
#         inp += deposit
#         account.append(deposit)
#         print(f"You deposited Rs.{deposit}")
#         print(account)
#     elif (userInput == "W"):
#         withdraw = int(input("Enter money to withdraw: "))
#         if(withdraw>inp):
#             print("Insufficient Amount!")
#         else:
#             out += withdraw
#             account.append(-withdraw)
#             print(f"You withdrew Rs.{withdraw}")
#             print(account)
#     else:
#         print("Invalid input! Please enter W, D, or Q.")
#     userInput = input("Press W for withdraw, D for deposit (Q to quit): ").upper()  
# print("You Quit")
# print(account)
# print(f"Your total deposit is Rs.{inp}")
# print(f"Your total withdrawal is Rs.{out}")
# print(f"Your current bank balance is Rs.{inp - out}")      









# priority simulator


# priorities = []
# userInput = input("Enter priority(q to quit): ").upper()
# while(userInput!="Q"):
#     priorities.append(userInput)
#     print(priorities)
#     userInput = input("Enter priority(q to quit): ").upper()
# print("You quited.")
# for priority in priorities:
#     priorityNameNo = len(priority)-4
#     priorityName = priority[0:priorityNameNo]
#     priorityNo = int(priority[-1])
#     nameList = []
#     noList = []
#     nameList.append(priorityName)
#     noList.append(priorityNo)
#     for i in range(len(nameList)):
#         print(f"{nameList[i]} (Priority {noList[i]})")

    
    
    
    




# userInput = list(input("Enter any string: ").upper())
# for i in userInput:
#     count = userInput.count(i)
#     if(count==1):
#         print(i)
#         break







# food simulator


food_name = []
rate_list = []
userInput = input("Enter any food name: (q to quit): ").capitalize()
if(userInput.upper()!="Q"):
    rate = int(input("Enter any rate: "))
while(userInput.upper()!="Q"):
    food_name.append(userInput)
    rate_list.append(rate)
    print(f"You ordered {userInput} of Rs {rate}")
    userInput = input("Enter any food name: (q to quit): ").capitalize()
    if(userInput.upper()!="Q"):
        rate = int(input("Enter any rate: "))
print("You quited.")
if(len(food_name)==0 or len(rate_list)==0):
    print("No item purchased")
for f_name in food_name:
    print(f_name," | ", end="    ") 
print()
for f_rate in rate_list:
    print(f_rate, " | " ,end="    ")
    