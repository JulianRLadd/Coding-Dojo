require_relative'human'
class Ninja < Human
    def initialize
        super
        @stealth = 175
    end
    def attack target
        super
        self
    end
    def steal target
        attack target
        @health+=10
    end
    def getAway
        @health-=15
        self
    end
end

ryosuke = Ninja.new
shinobi = Ninja.new

ryosuke.attack shinobi
puts shinobi.health


ryosuke.steal shinobi
puts shinobi.health
puts ryosuke.health

shinobi.getAway
puts shinobi.health