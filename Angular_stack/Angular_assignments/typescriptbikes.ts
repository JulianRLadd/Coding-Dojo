class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0){}
        displayInfo = () => {
        console.log(`Price: ${this.price} Maximum Speed: ${this.max_speed} Miles: ${this.miles}`)
        return this
    }
        ride = () => {
        console.log("Riding")
        this.miles += 10
        return this.miles
    }
        reverse = () => {
        if(this.miles>4){   
            console.log("Reversing")
            this.miles -= 5
            return this.miles
        } else {
            console.log("Can't go back any further")
            return
        }
    }
}
       
let bike1 = new Bike(200,"25mph");
let bike2 = new Bike(315,"40mph");
let bike3 = new Bike(425,"55mph");

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()

