class MathDojo
    def initialize
        @number = 0
    end
    def add *nums
        p nums
        if nums[0].class == Array
            for i in 0...nums.length
                for j in 0...nums[i].length
                    @number+=nums[i][j]
                end
            end
        else
            for k in 0...nums.length
                @number+=nums[k]
            end
        end
        self
    end
    def subtract *nums
        if nums[0].class == Array
            for i in 0...nums.length
                for j in 0...nums[i].length
                    @number-=nums[i][j]
                end
            end
        else
            for k in 0...nums.length
                @number-=nums[k]
            end
        end
        self
    end
    def result
        puts @number
        self
    end
end
challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15