import random



# print(random.random)   #Shows the file path of random number management file


# print(random.random())    #Shows random number form 0 to 1


# print(random.randint(1,10))   #Shows random number from 1 to 10


# print(random.randrange(2,20,3))    #Shows random number from 2 to 20 and jumps by in in backend"



# option1 = ["Rock","Paper","Scissors"]  
# print(random.choice(option1))     #Shows the random element from the option list



# option2 = ["apple","mango", "orange"]
# print(option2)
# random.shuffle(option2)     #It suffles the list elements
# print(option2)








# Rock Paper Scissor game


userInput = input("Enter rock or paper or scissor(q to quit): ").capitalize()
options = ["Rock","Paper","Scissor"]  
user_point = 0
while(userInput!="Q"):
    computer = random.choice(options)
    print(f"Computer choosed {computer}")
    if(userInput=="Rock" and computer == "Rock"):
        print("Its draw.")
    elif(userInput=="Paper" and computer == "Paper"):
        print("Its draw.")
    elif(userInput=="Scissor" and computer == "Scissor"):
        print("Its draw.")
    elif(userInput=="Rock" and computer == "Scissor"):
        print("You Won")
        user_point +=1
    elif(userInput=="Rock" and computer == "Paper"):
        print("You Lost")
        user_point -=1
    elif(userInput=="Paper" and computer == "Scissor"):
        print("You Lost")
        user_point -=1
    elif(userInput=="Paper" and computer == "Rock"):
        print("You Won")
        user_point +=1
    elif(userInput=="Scissor" and computer == "Paper"):
        print("You Won")
        user_point +=1
    elif(userInput=="Scissor" and computer == "Rock"):
        print("You Lost")
        user_point -=1
    else:
        print("Invalid input")
    userInput = input("Enter rock or paper or scissor(q to quit): ").capitalize()
print("You Quited")
print(f"Your final point is {user_point}")
print(f"Computer final point is {-user_point}")
print("*****Thankes for playing*****")
        

