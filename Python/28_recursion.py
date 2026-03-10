# Recursion is the method of repeting some task for a number of times until an required output is calculated.
# Recursion function are those type of function that keeps on calling it self.
# A recursive fucnction should be able to call itself, have a proper stopping condition else it will run infinitely.



# def factorial(n):
#     if(n==1 or n==0):
#         return 1
#     else:
#         return n* factorial(n-1)
# print(factorial(5))





def fibonacci(n,a=0,b=1):
    if(n==1):
        exit()
    else:
        num = a+b
        print(num)
        return fibonacci(n=n-1,a=b,b=(num))
        
print(fibonacci(10))
