require_relative 'mammal'
class Lion < Mammal
    def initialize
        @health =170
    end
    def display_health
        puts "This is a lion"
        super
    end
    def eat_humans
        @health+=20
    end
    def attack_town
        @health-=50
    end
    def fly
        @health-=10
    end
end

lion = Lion.new
lion.attack_town
lion.attack_town
lion.attack_town
lion.eat_humans 
lion.eat_humans 
lion.fly
lion.fly
lion.display_health
