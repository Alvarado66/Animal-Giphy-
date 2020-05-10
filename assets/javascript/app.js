$(document).ready(function() { 
    
    const key = "7w8Zsws3Lz5IuLUemcGQkgK8c0Riv4Hz";
    var cartoons = ["Bugs Bunny", "Woody", "Mickey Mouse"];
    // //  Basic Starter Buttons 

    function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < cartoons.length; i++) {

        var a = $("<button>");
        a.addClass("cartoon");
        a.attr("data-name", cartoons[i]);
        a.text(cartoons[i]);

        $("#buttons-view").append(a);
        }
    }

    $(document).on("click", ".cartoon", function() {

        $("#gifImage").empty();
        
        
       var cartoonButton = $(this)
       var q = cartoonButton.attr( "data-name" );
    //    // my API Key
       let queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + q;
       
      
       
        $.ajax({
            // pas in two important properties that YOU NEED to make a requests.
            // 1. url (this is your queryUrl string)
            // 2. method (is it a get? a post? what.)
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            // For loop over data array inside of response 
            // each time it iterates cartoons create a new element and grab the relevant items and pin
            // to the for loop block
            // where to place image tag container or var or array 
            // what happens when user clicks on another button does it clear or write over?
        })
      
    // // the queryURL to direct user for GIFs
    
    // // what "keyphrase" the user types
    // // const limit = 10; 
    // // will limit how many GIFs to show up after click
    // // let rating = [];
    // // the rating of each GIF
       

    } )

    
    $("#add-cartoon").on("click", function(event) {

        event.preventDefault();


        var cartoon = $("#cartoons-input").val().trim();

        cartoons.push(cartoon);


        renderButtons();
    });

    renderButtons();


})



