# input1 = int(input("Enter the first number: "))
# input2 = int(input("Enter the second number: "))

# print(f"The sum of {input1} and {input2} is {input1+input2}.")

# print(f"The difference of {input1} and {input2} is {input1-input2}.")
 
# print(f"The product of {input1} and {input2} is {input1*input2}.")

# print(f"The division of {input1} and {input2} is {input1/input2}.")





# import math


# perpendicular = int(input("Enter perpendicular: "))
# base = int(input("Enter base: "))
# hypotenuse = math.sqrt(pow(perpendicular,2) + pow(base,2))
# print(hypotenuse)




# credit =  input("Enter you credit card number: ")
# print(f"XXXX-XXXX-XXXX-{credit[12:16]}")

# print(f"XXXX-XXXX-XXXX-{credit[-4:0]}")








import random
# Rock Paper Scissor game




# userInput = input("Enter rock or paper or scissor(q to quit): ").capitalize()
# options = ["Rock","Paper","Scissor"]  
# user_point = 0
# while(userInput!="Q"):
#     computer = random.choice(options)
#     print(f"Computer choosed {computer}")
#     if(userInput=="Rock" and computer == "Rock"):
#         print("Its draw.")
#     elif(userInput=="Paper" and computer == "Paper"):
#         print("Its draw.")
#     elif(userInput=="Scissor" and computer == "Scissor"):
#         print("Its draw.")
#     elif(userInput=="Rock" and computer == "Scissor"):
#         print("You Won")
#         user_point +=1
#     elif(userInput=="Rock" and computer == "Paper"):
#         print("You Lost")
#         user_point -=1
#     elif(userInput=="Paper" and computer == "Scissor"):
#         print("You Lost")
#         user_point -=1
#     elif(userInput=="Paper" and computer == "Rock"):
#         print("You Won")
#         user_point +=1
#     elif(userInput=="Scissor" and computer == "Paper"):
#         print("You Won")
#         user_point +=1
#     elif(userInput=="Scissor" and computer == "Rock"):
#         print("You Lost")
#         user_point -=1
#     else:
#         print("Invalid input")
#     userInput = input("Enter rock or paper or scissor(q to quit): ").capitalize()
# print("You Quited")
# print(f"Your final point is {user_point}")
# print(f"Computer final point is {-user_point}")
# print("*****Thankes for playing*****")











# quiz game



# question_list = ["What is the capital city of Australia?","What gas do plants absorb from the atmosphere during photosynthesis?","In which year did World War II end?","“CPU” stand for?","ho wrote Romeo and Juliet?"]
# ans_list = ["Canberra","Carbon dioxide","1945","Central Processing Unit","William Shakespeare"]
# print("*************** Let's play quiz ***************")
# point = 0
# for i in  range(0,5):
#     print(question_list[i])
#     ans = input("Enter the ans: ").upper()
#     if(ans==ans_list[i].upper()):
#         point += 1
#         print("Correct")
#     else:
#         print("Wrong answer")
#         print(f"The correct answer is {ans_list[i]}")
# print(f"Your final point is {point}")   
# print("Thanks for playing...")











# bet game



# import random
  
# print("Betting game..")
# print("Symbols are ⭐ 🏆 💥 🚀 🍟")
# symbol_list = ["⭐","🏆","💥","🚀","🍟"]
# balance = 100
# check = input("Do you want to play? (Y/N): ").upper()
# while(check!="N" and check=="Y"):
#     random_sym1 = random.choice(symbol_list)
#     random_sym2 = random.choice(symbol_list)
#     random_sym3 = random.choice(symbol_list)
#     print(f"Your current balance is ${balance}")
#     amt= int(input("Enter your betting amount: "))
#     if(amt<=balance):
#         for i in range(1,4):
#             first = random_sym1
#             second = random_sym2
#             third = random_sym3
#         print(f"{first}|{second}|{third}")
#         if(first==second==third):
#             print(f"You won ${amt*2}")
#             balance = balance + (amt*2)
#         else:
#             print(f"You lost ${amt}")
#             balance = balance - amt
#         print(f"Your current balance is ${balance}")
#         check = input("Do you want to play again? (Y/N): ").upper()
#     else:
#         print("In-sufficient amount")
# print("You quited")
