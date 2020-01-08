function fizzbuzz(n){
    if (n<1){
        console.log("Parameter must be a positive number")
        return false;
    }
    sentence = ""
    for(i=0;i<=n;i++){
        if (i%3==0&&i%5==0){
            sentence+="FizzBuzz"
            if(i<=n){
                sentence+=", "
            }else{
                    sentence+="."
                }
        }
        else if(i%3==0){
            sentence+="Fizz"
            if(i<=n){
                sentence+=", "
            }else{
                    sentence+="."
                }
        }
        else if(i%5==0){
            sentence+="Buzz"
            if(i<=n){
                sentence+=", "
            }else{
                    sentence+="."
                }
        }
        else{
            sentence+=i
            if(i<=n){
                sentence+=", "
            }else{
                sentence+="."
            }
        }
    }
}