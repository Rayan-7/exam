
const express = require('express')
const router = express.Router()
const urllib  = require('urllib');

let RecipesData=[]
const myRecipes=[
    {
      ingredients: ['tomato', 'water'],
      title: 'Tomato Soup',
      thumbnail: 'sample.com/image.jpeg',
      href: 'youtube.com/movie'
    }
]


router.get('/recipes/:ingredient', function (request, response) {
    const RecipesInput =request.params.ingredient;
         
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${RecipesInput}`, function (err, data, res) {
                
        if (err) {
            throw err; // you need to handle error
        }

        RecipesData=JSON.parse(data)
        response.send(RecipesData)
    })
});
   

module.exports = router