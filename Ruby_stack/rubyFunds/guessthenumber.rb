def guess_number guess
    number = 25
    unless guess == number
        if guess > number
            p "Guess was too high!"
        end
        if guess < number
            p "Guess was too low!"
        end
    else
        p "You got it!"
    end
end     

guess_number 25