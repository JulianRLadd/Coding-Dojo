#Print 1-255
i = 1..255
puts i.to_a

#Print odd numbers between 1-255
puts i.to_a.select{|odds|odds.odd?}

#Print Sum
j=0
sum=0
while j < 256
    puts "New number: #{j} Sum: #{sum}"
    j+=1
    sum+=j
end

#Iterating through an array
x = [1,3,5,7,9,13]
def iterate array
    k=0
    while k<array.length
        puts array[k]
        k+=1
    end
end
iterate x

#Find Max
a = [1,3,5,7,9,13]
def findMax array
    puts array.max
end
findMax a

#Get Average
z = [1,3,5,7,9,13]
def average array
    sum=0
    for u in 0..array.length
        sum +=array[u].to_f
    end
    p sum/array.length.to_f
end
average z

#Array with Odd Numbers
def oddArray
    y = 1..255
    y.to_a.select{|odds|odds.odd?}
end

#Greater than Y
def greaterThanY array,y
    puts array.select{|num|num>y}
end
z = [1,3,5,7,9,13]
greaterThanY z,8

#Square the values
x = [1,5,10,-2]
def squareArr array
    for i in 0...array.length
        array[i]= array[i]*array[i]
    end
    p array
end
squareArr x

#Eliminate Negative Numbers
x = [1,5,10,-2]
def noNegs array
    for i in 0...array.length
        array[i] = 0 if array[i] < 0
    end
    p array
end
noNegs x

#Max, Min, and Average
x = [1,5,10,-2]
def mmaa array
    a = [array.min,array.max]
    sum=0
    for u in 0...array.length
        sum +=array[u]
    end
    p a << sum.to_f/array.length
end
mmaa x

#Shifting the Values in the Array
x = [1, 5, 10, 7, -2]
def shiftVal array
    for y in 0...array.length
        array[y] = array[y+1]
        array[y] = 0 if array[y] == nil
    end
    p array
end
shiftVal x

#Number to String
x = [-1,-3,2]
def num2str array
    for i in 0...array.length
        array[i] = "Dojo" if array[i] < 0
    end
    p array
end
num2str x