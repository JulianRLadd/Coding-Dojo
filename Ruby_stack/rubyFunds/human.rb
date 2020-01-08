class Human
    attr_accessor :health,:strength,:intelligence,:stealth
    def initialize
        @health = 100
        @strength = 3
        @intelligence = 3
        @stealth = 3
    end
    def attack target
        if target.class.ancestors.include? Human
            target.health-=5
        else
            puts "Target is not human. RUN!!!"
        end
    end
end

cain = Human.new
abel = Human.new
cain.attack abel
puts abel.health