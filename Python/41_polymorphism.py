


# Polymorphism means to have more than one form
# It can be achieved using inheritance or duck typing



class Shape:
    def area(self):
        pass
    
class Circle(Shape):
    def __init__(self,radius):
        self.my_radius = radius
    def area(self):
        return 3.1415*self.my_radius*self.my_radius
    
class Rectangle(Shape):
    def __init__(self,length,breadth):
        self.my_laegth = length
        self.my_breadth = breadth
    def area(self):
        return self.my_laegth*self.my_breadth

class Pizza(Circle):
    def __init__(self,topping,radius):
        self.my_topping = topping
        super().__init__(radius)
        
         
shape_obj =[Circle(7), Rectangle(10,15), Pizza("Tomato",12) ]   # Duck yping
for i in shape_obj:
    print(f"{i.area():.2f} cm sqare")