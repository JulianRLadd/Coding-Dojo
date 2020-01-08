class BankAccount
    @@numOfAccounts=0
    attr_reader :accnum,:checking,:saving
    def initialize
        @checking = 0
        @savings = 0
        newAnumber
        @@numOfAccounts+=1
        @interestRate = 0.01
    end
    def getAccountNum
        puts "Account Number:"
        p @accnum
        self
    end
    def getCheckings
        puts "Checking Balance:"
        p @checking
        self
    end
    def getSavings
        puts "Savings Balance:"
        p @savings
        self
    end
    def depositSavings amount
        @savings+=amount
        p @savings
        self
    end
    def depositChecking amount
        @checking+=amount
        p @checking
        self
    end
    def withdrawSavings amount
        if amount > @savings
            puts "Insufficient funds"
        else
        @savings-=amount
        puts @savings
        end
        self
    end
    def withdrawChecking amount
        if amount > @checking
            puts "Insufficient funds"
        else
        @checking-=amount
        puts @checking
        end
        self
    end
    def total
        puts "Total Balance:"
        puts @checking+@savings
        self
    end
    def accountInformation
        getAccountNum
        total
        getCheckings
        getSavings
        puts "Interest Rate: %s"% @interestRate
    end
    private
        def newAnumber
            @accnum = rand(10)
            self
        end
end


acc = BankAccount.new
acc.getCheckings
acc.getSavings
acc.getAccountNum
acc.depositChecking 300
acc.depositSavings 200
acc.withdrawChecking 20
acc.withdrawSavings 35
acc.withdrawSavings 335
acc.total
acc.accountInformation

