// //1
// var hello
// console.log(hello)//logs undefined
// hello = 'world'

console.log(hello);                                   
var hello = 'world';                                 


// //2
// var needle
// function test(){
//     var needle
//     needle = 'magnet'
//     console.log(needle)//logged as magnet
// }
// test()//logs magnet

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}


//3
// var brendan
// function print(){
//     brendan = 'only okay'
//     console.log(brendan)//logged as only okay
// }
// brendan = 'super cool'
// console.log(brendan)//logs super cool

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);


//4
// var food
// function eat(){
//     var food
//     food = 'half-chicken'
//     console.log(food)//logged as half-chicken
//     food = 'gone'
// }
// food = 'chicken'
// console.log(food)//logs chicken
// eat()//logs half-chicken

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}


//5
// var mean
// mean()//error: mean is not a function; Nothing else runs
// console.log(food)
// mean = function(){
//     var food
//     food = 'chicken'
//     console.log(food)
//     food = "fish"
//     console.log(food)
// }
// console.log(food)

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);


//6
// var genre
// function rewind(){
//     var genre
//     genre = "rock"
//     console.log(genre)//logged as rock
//     genre =  "r&b"
//     console.log(genre)//logged as r&b
// }
// console.log(genre)//logs undefined
// genre = "disco"
// rewind()//logs rock, logs r&b
// console.log(genre)//logs disco

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);


//7
// var dojo
// function learn(){
//     var dojo
//     var dojo
//     dojo = "seattle"
//     console.log(dojo)//logged as seattle
//     dojo = "burbank"
//     console.log(dojo)//logged as burbank
// }
// dojo = "san jose"
// console.log(dojo)//logs san jose
// learn()//logs seattle, logs burbank
// console.log(dojo)//logs san jose

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//8
// function makeDojo(name, students){
//     const dojo = {}
//     dojo.name = name
//     dojo.students = students
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"
//     }
//     return dojo
// }

// console.log(makeDojo("Chicago", 65))
// console.log(makeDojo("Berkeley", 0))//error: Attribute is not created


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}