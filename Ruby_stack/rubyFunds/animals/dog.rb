require_relative 'mammal'
class Dog < Mammal
    def initialize
        super
    end
    def display_health
        super
    end
    def pet
        @health+=5
    end
    def walk
        @health-=1
    end
    def run
        @health-=10
    end
end

animus = Dog.new
animus.walk
animus.walk
animus.walk
animus.run 
animus.run 
animus.pet
animus.display_health

