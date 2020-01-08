$('document').ready(function(){
    // Query source
    console.log('Document is ready!')
    $.get("https://opentdb.com/api.php?amount=10&category=27&type=multiple", function(data){
        animal = data.results;
        console.log(data);
    })
    // things
    // $('button').click(function(){ 
    //     $.get("https://opentdb.com/api.php?amount=10&category=27&type=multiple", function(data){
    //     })
    // })

    // Questions and Answers
    $("#q1").click(function(){ //when I click the div area with id="q1"... it is relaced with the question [0] with 1 correct answer and 3 incorrect
        $("#q1").html("<div class='center'><p>"+animal[0].question+"</p><br>\
        <p><input type='radio'> "+animal[0].incorrect_answers[0]+"</p>\
        <p><input type='radio'> "+animal[0].incorrect_answers[1]+"</p>\
        <p><input type='radio'> "+animal[0].correct_answer+"</p>\
        <p><input type='radio'> "+animal[0].incorrect_answers[2]+"</p></div>");
    })
    $("#q2").click(function(){ 
        $("#q2").html("<div class='center'><p>"+animal[1].question+"</p><br>\
        <p>"+animal[1].incorrect_answers[0]+"</p>\
        <p>"+animal[1].incorrect_answers[1]+"</p>\
        <p>"+animal[1].correct_answer+"</p>\
        <p>"+animal[1].incorrect_answers[2]+"</p></div>");
    })
    $("#q3").click(function(){ 
        $("#q3").html("<div class='center'><p>"+animal[2].question+"</p><br>\
        <p>"+animal[2].incorrect_answers[0]+"</p>\
        <p>"+animal[2].incorrect_answers[1]+"</p>\
        <p>"+animal[2].correct_answer+"</p>\
        <p>"+animal[2].incorrect_answers[2]+"</p></div>");
    })
    $("#q4").click(function(){ 
        $("#q4").html("<div class='center'><p>"+animal[3].question+"</p><br>\
        <p>"+animal[3].incorrect_answers[0]+"</p>\
        <p>"+animal[3].incorrect_answers[1]+"</p>\
        <p>"+animal[3].correct_answer+"</p>\
        <p>"+animal[3].incorrect_answers[2]+"</p></div>");
    })
})