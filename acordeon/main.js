$(document).ready(function(){

    var question = $("dl");
    var title = $("dt");
    var description = $("dd");

    description.hide();

    question.on("click", function(){

        if ($(this).is(".open")){

            $(this).removeClass("open").find("dd").slideUp();

        } else {

            $(this).addClass("open").find("dd").slideDown();

        }

        if($(this).siblings(".open")){

            $(this).siblings(".open").find("dd").slideUp(function(){

              $(this).closest(".open").removeClass("open");

            });

        }

    });

});

