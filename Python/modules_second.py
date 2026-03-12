def final(f,s,sign):
    def add(a,b):
        print(f"The sum is {a+b}")
    
    def sub(a,b):
        print(f"The difference is {a-b}")
    
    def mul(a,b):
        print(f"The multuplication is {a*b}")
    
    def div(a,b):
        print(f"The division is {a/b}")

    if sign=="+":
        add(f,s)
    elif sign=="-":
        sub(f,s)
    elif sign=="*":
        mul(f,s)
    elif sign=="/":
        div(f,s)
    else:
        print("Invalid input")