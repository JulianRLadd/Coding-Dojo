function info(data) {
    console.log(data)
    for(question of data.results){
        $('.board').append('<div class="bg-primary border border-dark"><p>'+question.category+'</p></div>')
        answers=''
        for(answer of question.incorrect_answers){
            answers+='<li>'+answer+'</li>'
        }
        $('.board').append('<div class = "bg-success border border-light d-inline-block"><p>'+question.question+'<ul><li>'+question.correct_answer+'</li>'+answers+'</ul></p></div>')
    }
    return data
}

function triviaData(){
$.get("https://opentdb.com/api.php?amount=15", info)
}

trivia = triviaData

for(i=0;i< trivia.length;i++){
    console.log(trivia[i].category)
}