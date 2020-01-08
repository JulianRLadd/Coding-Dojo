class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result+= num
        for i in nums:
            self.result+=i
        return self
    def subtract(self, num, *nums):
        self.result-= num
        for i in nums:
            self.result-=i
        return self
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)
x = md.add(6).add(5,41).add(-34,89).result
print(x)
x = md.subtract(7).subtract(23,13).subtract(3,-12).result
print(x)	



