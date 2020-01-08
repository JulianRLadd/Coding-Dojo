function coinChange(change){
    dinero = {
        'dollars' :{'amount': 100, 'count' : 0},
        'quarters' : {'amount': 25, 'count' : 0},
        'dimes' : {'amount': 10, 'count' : 0},
        'nickels' : {'amount': 5, 'count' : 0},
        'pennies' : {'amount': 1, 'count' : 0},
    }
        for ( type in dinero){
          console.log(type)
            while(change>=dinero[type].amount){
              console.log(dinero[type]);
                change-=dinero[type].amount
                console.log(dinero[type].count);               

                dinero[type].count++

                console.log(dinero[type].count)
        }
    }
    
    statement = "Dollars: "+dinero.dollars.count+", Quarters: "+dinero.quarters.count+", Dimes: "+dinero.dimes.count+", Nickels: "+dinero.nickels.count+", Pennies: "+dinero.pennies.count

    return statement
}

console.log(coinChange(327))