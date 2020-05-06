$(document).ready(function() {

    const key = "7w8Zsws3Lz5IuLUemcGQkgK8c0Riv4Hz";
    const q 
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + 



    function displayMeme() {
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function(response) {

            let results = Response.data;

        })
    }
})