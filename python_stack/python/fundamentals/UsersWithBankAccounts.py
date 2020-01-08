
class BankAccount():
    def __init__(self, balance, int_rate): 
        self.balance=balance
        self.int_rate=0.03
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

class User():
    def __init__(self,account,name):
        self.account = BankAccount(balance=account,int_rate=0.03)
        self.name = name

    def make_withdrawal(self,amount):
        self.account.withdrawal(amount)
        return self
    def make_deposit(self,amount):
        self.account.deposit(amount)
        return self

    def display_user_balance(self):
        print("User :",self.name,", Balance: ",self.account.balance, "Interest Rate: ", self.account.int_rate)
        return self
    def transfer_money(self,other_user,amount):
        self.account.balance-=amount
        other_user.account.balance+=amount


cerryl = User(500,"Cerryl The Great")

cerryl.make_deposit(400).display_user_balance().make_withdrawal(50).display_user_balance()


bob = User(200,"Bob")

bob.make_deposit(3000)
bob.make_deposit(440)
bob.make_deposit(200)
bob.make_withdrawal(1200)
bob.display_user_balance()

carl = User(500,"Carl")
carl.make_deposit(450)
carl.make_deposit(3200)
carl.make_withdrawal(700)
carl.make_withdrawal(100)
carl.display_user_balance()

tyrone = User(54790, "Tyrone")
tyrone.make_deposit(1500)
tyrone.make_withdrawal(700)
tyrone.make_withdrawal(900)
tyrone.make_withdrawal(1900)

tyrone.display_user_balance()

bob.transfer_money(tyrone,600)
bob.display_user_balance()
tyrone.display_user_balance()

leyladin= User(2000,"Leyladin")


cerryl.make_deposit(500).make_deposit(2500).make_deposit(3500).make_withdrawal(1500).account.yield_interest().display_account_info()

leyladin.make_deposit(2500).make_deposit(700).make_withdrawal(200).make_withdrawal(500).make_withdrawal(800).make_withdrawal(400).account.yield_interest().display_account_info()
