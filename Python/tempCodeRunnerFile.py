account = []
out = 0
inp = 0
userInput = input("Press W for withdraw, D for deposit (Q to quit): ").upper()  
while(userInput!="Q"):
    if (userInput == "D"):
        deposit = int(input("Enter money to deposit: "))
        inp += deposit
        account.append(deposit)
        print(f"You deposited Rs.{deposit}")
        print(account)
    elif (userInput == "W"):
        withdraw = int(input("Enter money to withdraw: "))
        out += withdraw
        account.append(-withdraw)
        print(f"You withdrew Rs.{withdraw}")
        print(account)
    else:
        print("Invalid input! Please enter W, D, or Q.")
    userInput = input("Press W for withdraw, D for deposit (Q to quit): ").upper()  
print("You Quit")
print(account)
print(f"Your total deposit is Rs.{inp}")
print(f"Your total withdrawal is Rs.{out}")
print(f"Your current bank balance is Rs.{inp - out}")      
if inp < out:
    print("Caution! Your account doesn't have enough money.")