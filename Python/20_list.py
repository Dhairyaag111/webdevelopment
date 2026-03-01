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



fruits = []
userInput = input("Enter any fruit name: (q to quit): ")
while(userInput.upper()!="Q"):
    fruits.append(userInput)
    print(fruits)
    userInput = input("Enter any fruit name: (q to quit): ")
print("You quited.")
print(fruits)
