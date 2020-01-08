class Ninja{
    constructor(name){
        this.name= name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
    console.log("My ninja name is "+this.name+"!")
    }
    showStats(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", "+"Strength: "+this.strength)
    }
    drinkSake(){
        this.health+=10
    }
    punch(obj){
        if(obj instanceof Ninja){
            obj.health-=5
            console.log(obj.name+" was punched by "+this.name+" and lost 5 health!")
        }
        else{
            console.log("That is not a ninja!!Thou art a LIAR!!!")
        }
    }

    kick(obj){
        if(obj instanceof Ninja){
            let damage = 15*this.strength
            obj.health-= damage
            console.log(obj.name+" was kicked by "+this.name+" and lost "+damage+" health!")
        }
        else{
            console.log("That is not a ninja! IMPERSONATOR!!!")
        }
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        console.log("Be wise as a serpent, yet harmless as a dove")
        const quote = super.drinkSake()
    }
}
var sensei1 = new Sensei("Ryusuke")

console.log(sensei1.name+"'s health level: "+sensei1.health)

sensei1.speakWisdom()
console.log(sensei1.name+"'s health level: "+sensei1.health)
sensei1.sayName()
sensei1.showStats()

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Ryu");
console.log(ninja1.name+"'s health level: "+ninja1.health)
console.log(ninja2.name+"'s health level: "+ninja2.health)
ninja1.drinkSake()
console.log(ninja1.name+"'s health level: "+ninja1.health)

ninja1.sayName()
ninja1.showStats()
ninja2.sayName()
ninja2.showStats()

ninja1.punch(ninja2)
ninja2.kick(ninja1)

console.log(ninja1.health)
console.log(ninja2.health)

ninja2.kick(ninja1)
ninja1.punch(sensei1)