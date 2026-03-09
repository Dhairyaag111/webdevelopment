import random



print(random.random)  #Shows the file path of random number management file


print(random.random())  #Shows random number form 0 to 1


print(random.randint(1,10)) #Showa random number from 1 to 10


print(random.randrange(2,20,3))  #Shows random number from 2 to 20 and jumps by in in backend"



option1 = ["Rock","Paper","Scissors"]  
print(random.choice(option1))  #Shows the random element from the option list



option2 = ["apple","mango", "orange"]
print(option2)
random.shuffle(option2)   #It suffles the list elements
print(option2)