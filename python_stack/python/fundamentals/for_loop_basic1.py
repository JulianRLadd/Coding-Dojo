for i in range(151):
    print (i)


for i in range(5,5001,5):
    print (i)


for i in range(1,101,1):
    if i%5==0 and i%10==0:
        print ("Coding Dojo")
    elif i%5==0:
        print ("Coding")
    else:
        print (i)


sum = 0
for i in range(500000):
    if i%2==1 or i%2==0.5:
        sum= sum +i
print (sum)


for i in range(2018,0,-4):
    print (i)


lowNum=2
highNum=9
mult=3
for i in range(lowNum,highNum+1,1):
    if i%mult==0:
        print (i)
