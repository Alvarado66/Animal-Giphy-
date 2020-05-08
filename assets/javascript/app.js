$(document).ready(function() {

    const key = "7w8Zsws3Lz5IuLUemcGQkgK8c0Riv4Hz";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + 
    var q = topics ; 
    let topics = ["Bugs Bunny", "Daffy Duck", "Pokemon"] ;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        response.data.forEach((d)); {
            $('.mainContainer').append('<img src=' + d.images.original.url + '" />')
            }
            
        });

        function addTopic () {
            for (var i = 0; i < topics.length; i++) {
                document.getElementById("#newGifs").innerHTML = "<button>" + topics[i] + "</button>"
            }
        }

})
    




