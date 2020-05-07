$(document).ready(function() {

    const key = "7w8Zsws3Lz5IuLUemcGQkgK8c0Riv4Hz";
    let q = 
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + 
    let vehicle = 



    function displayMeme() {
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function(response) {

            let results = Response.data;

        })
    }

    function renderButton() {
        $("#newGifs").empty();

        for (let i = 0; i < memes.length; i++) {
            
            let choice = $("<button>");
            choice.addClass("img")
            choice.attr("data-name"), 
        }
        
    }

    
})