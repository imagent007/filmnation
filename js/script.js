/*global $*/

$(".button").click(function(){
    console.log("console")
    var search = $("#search").val();
    $.ajax({
    url: "https://www.omdbapi.com/?apikey=8e9ded79&plot=full&t=" + search,
    method: "GET",
    success: function(response){
         console.log(response);

        if (response.Year < "2019") {
            $("#results").html("<h2>" + response.Title + "</h2>" 
        + "<img src=" + response.Poster + ">" +
        "<p> This movie was released in " + response.Year + ".</p>" +
        "<p>" + response.Plot  + "</p>");
        }
        
        if (response.Year > "2019") {
            $("#results").html("<h2>" + response.Title + "</h2>" 
            + "<img src=" + response.Poster + ">" +
            "<p> This movie will be released in " + response.Year + ".</p>" +
            "<p>" + response.Plot  + "</p>");
        }
        
    },

    });
});


