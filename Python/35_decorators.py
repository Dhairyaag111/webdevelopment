# Decorator is a function that extends the behavior of another function without modifing the base function.
# We should pass the base function as an argument to the decorator.
# It is a powerfull and versatile tool that allows us to modify the behavior of the function and extends its functionality without modifing the code written that function.
# Decorator always returns the function.






def decorator_func(func):
    def inner_func():
        print("Before")
        func()
        print("After")
    return inner_func

@decorator_func

def hello():
    print("Hello world")

hello()

def hello2():
    print("Hello world 2")
    
hello2()