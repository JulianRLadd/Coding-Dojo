require_relative'human'
class Wizard<Human
    def initialize
        super
        @health=50
        @intelligence=25
    end
    def attack target
        super
    end
    def fireball target
        if target.class.ancestors.include? Human
            target.health-=20
        else
            puts "Target is not human. RUN!!!"
        end
    end
    def heal
        @health+=10
        self
    end
end

gandalf = Wizard.new
dumbledore = Wizard.new
gandalf.heal
puts gandalf.health
puts gandalf.intelligence
dumbledore.fireball gandalf
puts gandalf.health