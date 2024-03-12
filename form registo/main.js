/*
Codificação para Formulario
*/

$(document).ready(function(){
    console.log("O doc ta pronto :)");

    $("input, textarea").on("focusin", function(event){
        $(this).addClass("border-form");
    
        console.log(event);
    
    });

    $("input, textarea").on("focusout", function(event){
        $(this).removeClass("border-form");
        
        console.log(event);
    
    });

    $("#load").hide();

    


    $("form").on("submit", function(event){
        console.log("submit");

        var username = $("input#username").val();
        var email = $("input#email").val();
        var nascimento = $("input#dob").val();

        var frase = "Olá "+username+", com data de nascimento"+dob+", foi registado para o email"+email;

        console.log("frase");

        event.preventDefault();

        $("#load").fadeIn(1200, function(){

            $(this).find("span").text("Enviado com sucesso");

            $(this).find(".close").on("click", function(){
            $(this).parent().fadeOut(500);
            });
        });
    });
});
    //$("#loader").show();

    /*       -------------------------OU-------------------------

    $("input, textarea").on("focusin focusout", function(event){
        $(this).toggleClass("border-form");
    });

    */

