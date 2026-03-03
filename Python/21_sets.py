# # Sets are just collections of unordered elements.
# # They don't take repeted values and doesn't cares about repetetation.
# # They are inclosed inside a curly brakets'{}'.
# # They are immuatable.



# # Why do we use set?
# # To remove duplicate data.


# # Check for an element is faster in set.
# # We can perfrom different set operations like union, intercept.






# set1 = {11,43,3,23,5}
# print(set1)

# set2 = set()  # Empty set
# print(type(set1))
# print(type(set2))


# for i in set1:
#     print(i)



# fruits = {'Apple', 'Mango', 'Kiwi', 'Guava'}

# print(len(fruits))

# print('Apple'  in fruits)


# fruits.add("Grapes")
# print(fruits)

# fruits.remove('Grapes')
# print(fruits)

# fruits.pop()
# print(fruits)

# fruits.clear()
# print(fruits)




# fruits = {'Apple', 'Mango', 'Kiwi', 'Guava'}

# new_fruit_list = list(fruits)
# print(new_fruit_list)





# unique character counting


# method 1

# set1 = set()
# userInput = input("Enter a string: ").upper()
# for i in range (len(userInput)):
#     set1.add(userInput[i])
# print(f"There are {len(set1)} unique characters.")


# method 2 

# user = set(input("Enter any string : "))
# print(f"There are {len(user)} unique characters.")




