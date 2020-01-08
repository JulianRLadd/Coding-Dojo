/* turned declated type to any, that way it can be either data types*/
var myString: any;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;


/* turned declated type to any, that way it can be either data types*/
function sayHello(name: any) {
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));
 

 /*added question mark after the declared variable name to make it optional */
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 


 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
     lastName: "Patel",
    /*Added 's' on the end of belts so the object's attribute's name would match
    the interface's declared attribute*/
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 /* object must be declared as new since it hasn't been instanced yet.Also,
 the class(object/function) Ninja requires two string arguments in order to function(lol) */
 const shane = new Ninja("Alan","Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 /*Switched object 'turing'for 'shane' because turing is an object with the same attributes
 as a Ninja class, but it is not a 'Ninja' object because it was not declared as one. */
 console.log(study(shane));

 

 var increment = (x:number) => x + 1;
// This works great:
console.log(increment(3));
/*Just needed to remove the curly brackets as they are unneccessary */
var square = (x:number) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
/*Since there are multiple arugments in this function, the parameter requires
parentheses*/
var multiply = (x:number,y:number) => x * y;
// Nor is this working:
/*return statement needed to be in curly brackets because functions can only return one thing */
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum,product,difference]
}
console.log(multiply(4, 3))
console.log(math(4, 3))

/*Used the arrow notation to fix code, as suggested */
class Elephant {
    constructor(public age: number){}
    birthday = ()=> this.age++
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 