

$( "#submitBtn" ).on("click",function() {
    
    const searchInput=$("#searchInput").val()

    $.get(`/recipes/${searchInput}`,function(recipesData){
        console.log(recipesData)


        const source = $('#menu-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({Recipes:recipesData.results});

        // append our new html to the page
        $('#container').append(newHTML);
      })
  });
/*
  $("#container").on("click", ".images", function(){
    alert("example")
  })*/

  

 