require_relative 'bankaccount'
RSpec.describe BankAccount do
    before(:each) do
        # updated this block to create two projects
        @bankaccount1 = BankAccount.new
        @bankaccount2 = BankAccount.new
        @bankaccount1.depositChecking(100)
        @bankaccount1.depositSavings(75)
        @bankaccount2.depositChecking(100)
        @bankaccount2.depositSavings(75)
    end
    it 'Has a getter method for retrieving the checking account balance' do
        @bankaccount1.getChecking
        expect(@bankaccount1.getChecking).to eq 100
    end
    it 'Has a getter method that retrieves the total account balance' do
        @bankaccount2.total
        expect(@bankaccount2.total).to eq(175)
    end
    it 'Has a function that allows the user to withdraw cash' do
        @bankaccount1.withdrawChecking 50
        expect(@bankaccount1.getChecking).to eq(50)
    end
    it 'Raises an error if a user tries to withdraw more money than they have in the account' do 
        expect{@bankaccount2.withdrawChecking(150)}.to raise_error(NoMethodError)
    end
    it 'Raises an error when the user attempts to retrieve the total number of bank accounts' do
        expect{@bankaccount1.numOfAccounts}.to raise_error(NoMethodError)
    end
    it 'Raises an error when the user attempts to set the interest rate' do
        expect{@bankaccount2.interestRate = 0.05}.to raise_error(NoMethodError) 
    end
end