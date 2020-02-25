const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.use( express.static( "images" ) );

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render('cats');
})

app.get("/schizo", (req, res) => {
    var details = [
        {name:"Schizo",
        age:"6.5", 
        hobbies: "Making choices", 
        fav_food: "Raspberries and graham crackers", 
        wanted_for: "Burning down several houses.Swears he's innocent."}
    ]
    res.render('details',{files:details},);
})
app.get("/linx", (req, res) => {
    var details = [
        {name:"Linx",
        age:"1", 
        hobbies: "Owning the world", 
        fav_food: "Cat milk and the finest fish", 
        wanted_for: "Cutting elevator wires in his aparment building"}
    ]
    res.render('details',{files:details});
})
app.get("/evour", (req, res) => {
    var details = [
        {name:"Evour",
        age:"2", 
        hobbies: "Playing with his food", 
        fav_food: "Any loved pets of humans", 
        wanted_for: "Eating 7 domesticated hamsters. He must be stopped!"}
    ]
    res.render('details',{files:details});})
app.get("/legion", (req, res) => {
    var details = [
        {name:"Legion",
        age:"0.3", 
        hobbies: "Having conversations with himself (claims he's talking to others)", 
        fav_food: "Grapes, mice, and human fingers", 
        wanted_for: "Wiping out a whole neighborhood of humans while they were asleep"}
    ]
    res.render('details',{files:details});})
app.get("/msparrot", (req, res) => {
    var details = [
        {name: "Ms Parrot",
        age:"8", 
        hobbies: "Extortion, Blackmail, and Dog-napping", 
        fav_food: "The cries of toddlers and the whimpers of canines", 
        wanted_for: "Questioning. Prime suspect for the mysterious disappearance of Spike, Rex, and several poodles"}
    ]
    res.render('details',{files:details});})
app.get("/tripod", (req, res) => {
    var details = [
        {name:"Tripod",
        age:"3,3 and 3", 
        hobbies: "Painting themselves black and walking in front of humans", 
        fav_food: "Live beetles", 
        wanted_for: "Pushing humans off of buildings"}
    ]
    res.render('details',{files:details});})


app.listen(8000, () => console.log("listening on port 8000"));
