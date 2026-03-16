# If __name__ == "__main__". This is a very important pattern in python programming.
# A python program uses the condition if __name__ == "__main__" to only run the code inside the if statement when the program is run directly by the python interpreter.
# The code inside the if statement is not executed when the files code is imported as a module.
# If __name__ == "__main__" is a variable in python 
# Python has a large nunber of special variable that begin and end with double underscore.
# They are called as dunder (double underscore). __name__ is pronounced as dunder name.



print(__name__) # __main__ will be the output as we are in our main python file, not inside a certain module




import modules_second as ms
print(ms.__name__)


# Now here we have imported module_second as ms. So whenever we print __name__ after importing certain module then we will get output as that particular module name.
# The main job of __name__ keyword is to record the name of the currently running module or script.



#      Why this method is important?
# ---> This variable is important because this allows us to reuse the code from a script by importing it as a module in another program or script.

