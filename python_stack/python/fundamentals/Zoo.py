class MythicalBeasts:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        self.health = 0
        self.happiness = 0
        self.regenFactor = 0

    def feed(self):
        self.health+=10
        self.happiness+=10
        return self

    def display_info(self):
        print("Name : ",self.name)
        print("Age : ",self.age)
        print("Health : ",self.health)
        print("Happiness : ",self.happiness)
        print("Regeneration Factor : ",self.regenFactor)
        return self


class Dragon(MythicalBeasts):
    def __init__(self,name,age):
        super().__init__(name,age)
        self.regenFactor = 1.05
        self.hapFactor = .78
        self.health = 800
        self.happiness = 34
        self.skill = "Breath of Flames"

    def feedMe(self):
        super().feed()
        self.health = round((self.regenFactor*self.health),2)
        self.happiness = round((self.hapFactor*self.happiness),2)
        print (self.name,"has been fed!")
        return self

    def useSkill(self):
        print (self.name, "used special skill: ",self.skill,"!")
        print ("Fire is EVERYWHERE! ")
        print ("GET TO THE CHOPPA!!!!")
        return self
carn = Dragon("Smaug",1345)
carn.display_info()
carn.feedMe()
carn.display_info()
carn.useSkill()



class Griffin(MythicalBeasts):
    def __init__(self,name,age):
        super().__init__(name,age)
        self.hapFactor = .96
        self.regenFactor = 1.06
        self.health = 400
        self.happiness = 78
        self.wings = "flap flap"

    def feedMe(self):
        super().feed()
        self.health = round((self.regenFactor*self.health),2)
        self.happiness = round((self.hapFactor*self.happiness),2)
        print (self.name,"has been fed!")
        return self

    def useWings(self):
        print (self.name, "used its wings...")
        print ("The griffin is flying away!!")
        print ("Activate the shock collar!")
        return self
beak = Griffin("Beak",312)
beak.display_info()
beak.feedMe()
beak.display_info()
beak.useWings()



class Unicorn(MythicalBeasts):
    def __init__(self,name,age):
        super().__init__(name,age)
        self.regenFactor = 1.09
        self.hapFactor = 1.08
        self.horn = "It's a magical horn!"

    def feedMe(self):
        super().feed()
        self.health = round((self.regenFactor*self.health),2)
        self.happiness = round((self.hapFactor*self.happiness),2)
        print (self.name,"has been fed!")
        return self

    def useHorn(self):
        print (self.name,"stamps his hoof and lowers its head.")
        print ("Uh Oh")
        print (self.name, "is charging!! Get back over the fence!!")
        return self
tip = Unicorn("Pegasus",789)
tip.display_info()
tip.feedMe()
tip.display_info()
tip.useHorn()

class Zoo:
    def __init__(self, zoo_name):
        self.mBeasts = []
        self.name = zoo_name
    def add_unicorn(self, name, age):
        self.mBeasts.append( Unicorn(name,age) )
    def add_griffin(self, name, age):
        self.mBeasts.append( Griffin(name,age) )
    def add_dragon(self, name, age):
        self.mBeasts.append( Dragon(name,age) )
    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for beasts in self.mBeasts:
            beasts.display_info()
zoo1 = Zoo("John's Zoo")
zoo1.add_dragon("Titania",1324)
zoo1.add_dragon("St. George's Nightmare",12479)
zoo1.add_unicorn("Apotis",1294)
zoo1.add_griffin("Pyleo",427)
zoo1.print_all_info()