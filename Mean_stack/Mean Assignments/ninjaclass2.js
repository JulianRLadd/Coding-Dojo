function Ninja(name){
    var self = this
    this.name= name
    this.health = 100
    var speed = 3
    var strength = 3

this.sayName = function sayName(){
    console.log("My ninja name is "+this.name+"!")
}
this.showStats = function showStats(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", "+"Strength: "+strength)
}
this.drinkSake = function drinkSake(){
    this.health+=10
}

this.punch = function punch(obj){
    if(obj instanceof Ninja){
        obj.health-=5
        console.log(obj.name+" was punched by "+this.name+" and lost 5 health!")
    }
    else{
        console.log("That is not a ninja!!Thou art a LIAR!!!")
    }
}

this.kick = function kick(obj){
    if(obj instanceof Ninja){
        damage = 15*strength
        obj.health-= damage
        console.log(obj.name+" was kicked by "+this.name+" and lost "+damage+" health!")
    }
    else{
        console.log("That is not a ninja! IMPERSONATOR!!!")
    }
}
}

class Shinobi{
    constructor(name){
        this.name = name
        this.health = 100
        var speed = 6
        var strength = 4
    }
}
var shinobi1 = new Shinobi("Ryusuke")

console.log("")

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Ryu");
console.log(ninja1.name+" health level: "+ninja1.health)
console.log(ninja2.name+" health level: "+ninja2.health)
ninja1.drinkSake()
console.log(ninja1.name+" health level: "+ninja1.health)

ninja1.sayName()
ninja1.showStats()
ninja2.sayName()
ninja2.showStats()

ninja1.punch(ninja2)
ninja2.kick(ninja1)

console.log(ninja1.health)
console.log(ninja2.health)

ninja2.kick(ninja1)
ninja1.punch(shinobi1)