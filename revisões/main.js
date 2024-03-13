$(document).ready(function(){

    console.log("ready!");

    $("form").on("submit", function(event){

        event.preventDefault();

        var answers = $("input:submit");

        console.log(answers);

        var matrix = {                      //array de respostas corretas

            "quest1": "bmw",
            "quest2": "mario",
            "quest3": "fcima",
            "quest4": "18",
            "quest5": "Italia",
            "quest6": "bmw"
 
        };

    });

});