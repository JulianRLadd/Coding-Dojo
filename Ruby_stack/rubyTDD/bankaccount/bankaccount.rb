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
    def getChecking
        puts "Checking Balance:"
        p @checking

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
            @error = raise_error(NoMethodError)
            return @error
        else
        @savings-=amount
        puts @savings
        end
        self
    end
    def withdrawChecking amount
        if amount > @checking
            puts "Insufficient funds"
            @error = raise_error(NoMethodError)
            return @error
        else
        @checking-=amount
        puts @checking
        end
        
    end
    def total
        puts "Total Balance:"
        puts @checking+@savings
        p @checking+@savings
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
