users = [
    {fname: "Kermit",
    lname: "the Frog",
    languages: [" Python", " JavaScript", " C#", " HTML", " CSS", " SQL"],
    interests: {
        music: [" guitar", " flute"],
        dance: [" tap", " salsa"],
        television: [" Black Mirror", " Stranger Things"]
    }
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: [" Python", " Swift", " Java"],
    interests: {
        food: [" honey", " honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: [" JavaScript", " HTML", " Go"],
    interests: {
        space: [" stars", " planets", " improbability"],
        home: [" tea", " yellow bulldozers"]
    }
    }
]

function userLanguages(users){
    for(user in users){
        var text = users[user].fname+" "
        text += users[user].lname+" "
        text += "knows"
        for(idioma in users[user].languages){
            if(users[user].languages[idioma]==users[user].languages[users[user].languages.length-1]){
                text+=" and"+users[user].languages[idioma]+"."
            }else{
                text+= users[user].languages[idioma]+","
            }
        }
        console.log(text)
    }
    return text
}


userLanguages(users)
