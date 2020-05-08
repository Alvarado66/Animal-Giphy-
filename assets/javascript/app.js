$(document).ready(function() {

    const key = "7w8Zsws3Lz5IuLUemcGQkgK8c0Riv4Hz";
    // my API Key
    let queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + 
    // the queryURL to direct user for GIFs
    let q = [];
    // what "keyphrase" the user types
    const limit = 10;
    // will limit how many GIFs to show up after click
    let rating = [];
    // the rating of each GIF
    let cartoons = ["Bugs Bunny", "Woody", "Mickey Mouse"];
    //  Basic Starter Buttons 






    function renderButtons() {


        $("#buttons-view").empty();


        for (var i = 0; i < cartoons.length; i++) {


        var character = $("<button>");

        character.addClass("newCartoon");

        character.attr("data-name", cartoons[i]);

        character.text(cartoons[i]);

        $("#buttons-view").append(cartoons);
        }
    }


    $("#addCartoon").on("click", function(event) {

        event.preventDefault();


        var newCharacter = $("#cartoons-input").val().trim();

        cartoons.push(character);


        renderButtons();
    });

    renderButtons();

})





