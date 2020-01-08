class Human:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        self.health = 100

    def greet(self,target):
        print(self.name.capitalize(), 'says "Hi" to ', target.name.capitalize())



bob = Human ('bob', 37)
carl = Human ('carl', 22)
zb1 = Human ('freddie',657)
bob.greet(carl)


class Ninja(Human):
    def __init__(self,name,age):
        super().__init__(name,age)

    def taunt(self,target):
        print (self.name, 'says "You cannot handle my kung-fu. HAAAIII-YAAAHHH!!" to', target.name.capitalize())


raijin = Ninja('raijin',23)
raijin.taunt(bob)