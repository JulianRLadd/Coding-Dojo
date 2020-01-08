arr = [3,5,1,2,7,9,8,13,25,32]
def sum array
    sum = 0
    for u in 0...array.length
        sum +=array[u]
    end
    big = array.select{|num|num>10}
    p "Sum :%s Numbers greater than 10: %s" % [sum,big]
end
sum arr



arr = %w{John KB Oliver Cory Matthew Christopher}
puts arr

def long5 array
    lt = array.select{|name|name.length>5}
    puts "Names longer than 5 characters: #{lt}"
end
long5 


abet = *("a".."z")
puts abet.shuffle!.last
puts abet.first 
puts "It's a vowel!" if ["a","e","i","o","u",].include? abet.first

rnum = Random.new
rands = []
first = rnum.rand(45)+55
for i in 0..9
    rands<<rnum.rand(45)+55
end
puts rands 

puts "Sorted: %s" % rands.sort
puts "Min value: %s  Max value: %s" % [rands.min,rands.max]


rnds = ""
for i in 0..4
    rnds<<(65+rand(26)).chr
end
puts rnds

rndStr = []
for y in 0..9
    rnds = ""
    for i in 0..4
        rnds<<(65+rand(26)).chr
    end
    rndStr<<rnds
end
puts rndStr