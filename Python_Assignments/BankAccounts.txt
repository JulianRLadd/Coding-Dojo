class BankAccount():
    def __init__(self, balance, int_rate): 
        self.balance=balance
        self.int_rate=0.01
    def deposit(self, amount):
        self.balance+=amount
        return self
    def withdrawal(self, amount):
        if(amount>self.balance):
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
            return self
        else:
            self.balance-=amount
            return self
    def display_account_info(self):
        print(self.balance)
    def yield_interest(self):
        if self.balance>0:
            self.balance= self.balance+(self.balance*self.int_rate)
            return self
        return self

cerryl= BankAccount(90,0.01)
leyladin= BankAccount(2000,0.03)


cerryl.deposit(500).deposit(2500).deposit(3500).withdrawal(1500).yield_interest().display_account_info()

leyladin.deposit(2500).deposit(700).withdrawal(200).withdrawal(500).withdrawal(800).withdrawal(400).yield_interest().display_account_info()