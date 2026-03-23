# Inheritance is a key feature in OOP where a class can inherit method, properties of another class.
# There are several types of inheritance like single level, multi level, multiple, hybrid, hierarchial etc.

 
 
#  single level


# class Parent:
#     def parent_method(self):
#         print("This is a parent function")
        
# class Child(Parent):
#     def child_method(self):
#         print("This is a child function")
        
# child_obj = Child()
# child_obj.child_method()
# child_obj.parent_method()








# multi level


# class Parent:
#     def parent_method(self):
#         print("This is a parent function")
        
# class Child(Parent):
#     def child_method(self):
#         print("This is a child function")
        
# class Children(Child):
#     def children_method(self):
#         print("This is a children function")
        
# children_obj = Children()
# children_obj.children_method()
# children_obj.child_method()
# children_obj.parent_method()








# multiple
 
 
# class A:
#     def method_A(self):
#         print("This is A")
# class B:
#     def method_B(self):
#         print("This is B")       
# class C:
#     def method_C(self):
#         print("This is C")   
# class D(A,B,C):
#     def method_D(self):
#         print("This is D")
        
# d_obj = D()
# d_obj.method_D()
# d_obj.method_A()
# d_obj.method_B()
# d_obj.method_C()









# hierarchial


# class Parent:
#     def __init__(self,name):
#         self.my_name = name
#     def parent_method2(self):
#         print(f"{self.my_name}")
        
        
# class Child(Parent):
#     def child_method(self):
#         print(f"{self.my_name}")
        
# child_obj = Child("Dhairya")
# child_obj.child_method()
# child_obj.parent_method2()