class Card{
    constructor(suit,name,value){
        this.suit = suit
        this.name = name
        this.value = value
    }
    show(){
    console.log("Suit :"+this.suit+", Name :"+this.name+", Value: "+this.value)
    }
}

class Deck{
    constructor(){
        this.build()
        }
    build(){
        this.cards = []
        this.graveyard=[]
        var suits = ['Hearts','Spades','Clubs','Diamonds']
        var name = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
        var values = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
        for(let suit in suits){
            for(let value in values){
                this.cards.push(new Card(suits[suit],name[value],values[value]))
                }
            }
        this.shuffle()
    }

    reset(player){
        player.hand=[]
        this.build()
        return this
        }
    shuffle(){
        var m = this.cards.length, temp, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
        temp = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = temp;
        }
        return this.cards;
        }
    deal(){
        return this.cards.pop()
    }
}

class Player{
    constructor(name){
        this.name = name
        this.hand = []
    }
    start(deck){
        for(let i = 0;i<5;i++){
            this.hand.push(deck.deal())
        }
        return this.hand
    }
    draw(deck){
        this.hand.push(deck.deal())
        return this.hand
    }
    discard(index){
        let temp = this.hand[index]
        this.hand[index] = this.hand[this.hand.length-1]
        this.hand[this.hand.length-1] = temp
        deck.graveyard.push(this.hand.pop())
        return (this.hand,deck.graveyard)
    }
}

deck = new Deck
player1 = new Player("Japheth")


deck.shuffle()

console.log(deck)

deck.reset(player1)

player1.start(deck)
player1.draw(deck)

console.log(player1.hand)

player1.discard(5)
console.log(player1.hand)

console.log(deck.graveyard)