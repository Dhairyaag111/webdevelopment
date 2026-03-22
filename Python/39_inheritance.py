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


class Parent:
    def parent_method(self):
        print("This is a parent function")
        
class Child(Parent):
    def child_method(self):
        print("This is a child function")
        
class Children(Child):
    def children_method(self):
        print("This is a children function")
        
children_obj = Children()
children_obj.children_method()
children_obj.child_method()
children_obj.parent_method()













