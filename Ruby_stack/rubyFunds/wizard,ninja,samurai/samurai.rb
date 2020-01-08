require_relative'human'
class Samurai<Human
    @@numOfSaumurai = 0
    def initialize
        super
        @health = 200
        @@numOfSaumurai+=1
    end
    def attack target
        super
        self
    end
    def deathBlow target
        if target.class.ancestors.include? Human
            target.health=0
        else
            puts "Target is not human. RUN!!!"
        end
        self
    end
    def meditate
        @health=200
    end
    def self.how_many
        puts @@numOfSaumurai
    end
end

mishimoto = Samurai.new
kenshin = Samurai.new
kenshin.attack mishimoto
puts mishimoto.health
mishimoto.deathBlow kenshin
puts kenshin.health
kenshin.meditate
puts kenshin.health
Samurai.how_many