


class withdrawal_Error(Exception):
    pass
balance = 5000

try:
    amount = int(input("Enter amount you want to withdraw: "))
    if(amount>balance):
        raise withdrawal_Error()
except withdrawal_Error:
    print("Insufficient balance")
except ValueError:
    print("Enter valid input.")
finally:
    print("Thanks for using ATM")