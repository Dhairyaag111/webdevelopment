# Collection of key values pairs is dictionary.
# It is ordered and mutable.
# No duplicate value is allowed.



dict1 = {
    "name" : "Dhairya Agrawal",
    "age" : 16,
    "isMarried" : False,
    "salary" : None
}  

# print(dict1)
# print(type(dict1))





# Methods in dictionary


# Ways to get values

# print(dict1["name"])
# print(dict1.get("name"))



print(dict1.keys())
print(dict1.values())



for key in dict1.values():
    print(key)


for val in dict1.values():
    print(val)
    

for key,value in dict1.items():
    print(f"{key} : {value}")