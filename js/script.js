/*global $*/

$("#searchbutton").click(function(){
    
    var search = $("#search").val();
    console.log(search)
    $.ajax({
    url: "https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s=" + search,
    method: "GET",
    success: function(response){
        $("body").append("<h2>" + response[0].Title + "</h2>" +
                        "<p> This movie was released in " + response[0].Year + "</p>");
        console.log(response)
        
    },

    });
});
