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
        // my API Key
       let queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + q  + '&limit=10'; 
       
      
       
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            $("#gifImage").empty();

            let results = response.data

            for (var i = 0; i < results.length; i++) {

                var cartoonDiv = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var cartoonImg = $("<img>");

                cartoonImg.attr("src", results[i].images.original_still.url);
                cartoonImg.addClass("cartoon")
                cartoonImg.attr("data-still", results[i].images.original_still.url)
                cartoonImg.attr("data-animate", results[i].images.original.url)
                cartoonImg.attr("data-state", "still")
                cartoonDiv.append(p);
                cartoonDiv.append(cartoonImg);
            }
                $("#gifContainer").prepend(cartoonDiv);

                $(".gif").on("click", function() {

                    var state = $(this).attr("data-state");

                    if (state === "still") {
                      $(this).attr("src", $(this).attr("data-animate"));
                      $(this).attr("data-state", "animate");
                    } else {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }

        })
            
    })
    
    $("#add-cartoon").on("click", function(event) {

        event.preventDefault();
        var cartoon = $("#cartoons-input").val().trim();
        cartoons.push(cartoon);
        renderButtons();
    });

    renderButtons();


})



