var heffalumps = {character:"Heffalumps"}
var eeyore = {character:"Eeyore"}
var kanga = {character:"Kanga"}
var owl = {character:"Owl"}
var christopherrobin = {character:"Christopher Robin"}
var rabbit = {character:"Rabbit"}
var gopher = {character:"Gopher"}
var piglet = {character:"Piglet"}
var winniethepooh = {character:"Winnie The Pooh"}
var bees = {character:"Bees"}
var tigger = {character:"Tigger",
                greet: function(){
                    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
                    }
                }

heffalumps.west = eeyore
eeyore.east = heffalumps
eeyore.south = kanga
kanga.north = eeyore
kanga.south = christopherrobin
christopherrobin.north = kanga
christopherrobin.west = owl
christopherrobin.east = rabbit
christopherrobin.south = winniethepooh
owl.east = christopherrobin
owl.south = piglet
piglet.north = owl
piglet.east = winniethepooh
winniethepooh.north = christopherrobin
winniethepooh.west = piglet
winniethepooh.east = bees
winniethepooh.south = tigger
tigger.north = winniethepooh
bees.west = winniethepooh
bees.north = rabbit
rabbit.west = christopherrobin
rabbit.south = bees
rabbit.east = gopher
gopher.west = rabbit

var player = {
    location: tigger
}
console.log(player.location.character)

function move(direction){
    if(direction=="north"&&player.location.north!==undefined){
        player.location = player.location.north
        console.log("You are now at "+player.location.character+"'s house.")
        return player.location
    }  
    if(direction=="south"&&player.location.south!==undefined){
        player.location = player.location.south
        console.log("You are now at "+player.location.character+"'s house.")
        player.location.greet()
        return player.location
    } 
    if(direction=="east"&&player.location.east!==undefined){
        player.location = player.location.east
        console.log("You are now at "+player.location.character+"'s house.")
        return player.location
    }
    if(direction=="west"&&player.location.west!==undefined){
        player.location = player.location.west
        console.log("You are now at "+player.location.character+"'s house.")
        return player.location
    }else{
        console.log("You may not move in that direction...There are weasels that way!!")
    }  
}
    