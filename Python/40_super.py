



# Super is a function used in child class to call methods from a parent class.



class Shape:
    def __init__(self,color,isFilled):
        self.my_color = color
        self.my_isFilled = isFilled 
    def test(self):
        print(f"My color is {self.my_color} and I am {'filled' if self.my_isFilled else 'not filled'}")

class Circle(Shape):
    def __init__(self,radius,color,isFilled):
        self.my_radius = radius
        super().__init__(color,isFilled)
    def test(self):
        print(f"I am circle and my area is {3.1415*self.my_radius*self.my_radius}")
        super().test()

class Rectangle(Shape):
    def __init__(self,length,breadth,color,isFilled):
        self.my_length = length
        self.my_breadth = breadth
        super().__init__(color,isFilled)
    def test(self):
        print(f"I am rectangle and my area is {self.my_length*self.my_breadth}")
        super().test()
        
        
        
circle_obj = Circle(7,"Red",True)
rectangle_obj = Rectangle(2,3,"Green",False)
circle_obj.test()
rectangle_obj.test()