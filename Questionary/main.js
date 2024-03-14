$(document).ready(function(){

    console.log("ready!");

    $("form").on("submit", function(event){

        event.preventDefault();

        var answers = $("input:checked");

        console.log(answers);

        var matrix = {                      //array de respostas corretas

            "quest1": "bmw",
            "quest2": "mario",
            "quest3": "fcima",
            "quest4": "18",
            "quest5": "Italia",
            "quest6": "bmw"
 
        };

        var correct = 0;
        var wrong = 0;

        answers.each(function(){

            var thisA = $(this);
            var quest = thisA[0]["name"];
            var answers = thisA[0]["id"];
            

            console.log(quest," - ", answers);


            if(matrix[quest] == answers){

                console.log("Correto");
                correct++;

                thisA.addClass("correct");

            } else {

                console.log("Errado");
                wrong++;

                thisA.addClass("wrong");

            }
        });

        $(".resposta").append("Tem ", correct, " perguntas certas e ", wrong," perguntas erradas.");

    });

});