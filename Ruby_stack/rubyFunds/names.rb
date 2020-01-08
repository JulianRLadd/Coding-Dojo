a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names = [a, b, c, d, e]


def display_all array
    puts "You have %s names in the 'names' array" % array.length
    for i in 0...array.length
        puts " The name is %s %s" % [array[i][:first_name],array[i][:last_name]]
    end
end

display_all names