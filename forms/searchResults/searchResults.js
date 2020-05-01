let requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ingredients=milk,icecream,yogurt"

function onXHRLoad ( ) {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results -1; i++) {
        message = message + apiData.results[i].title  + "\n" + apiData.results[i].id + "\n" + apiData.results[i].image + "\n"
              recipeResults.value = message

}
}

function callAPI(requestURL){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + requestURL)
xhttp.setRequestHeader('Content-Type', 'application/json')
xhttp.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
xhttp.setRequestHeader("x-rapidapi-key", "37e059e430msh82a330e6d3b6b1ep11e709jsn9a3dfe4966a3")
    
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

showResults.onclick=function(){
  callAPI(requestURL)
}
  // call the API calling code above

searchResults.onshow=function(){
recipeResults_contents.style.height = "200px"
}


  
  
/*when user clicks on the search image, they'll be taken to the search page*/
btnHomeSearchR.onclick=function(){
ChangeForm(homeScreen)
}

/*when user clicks on the search image, they'll be taken to the search page*/
btnSearchSearchR.onclick=function(){
ChangeForm(searchPage)
}

/*when user clicks on the star image, they'll be taken to the saved recipes page*/
btnSavedRecipesSearchR.onclick=function(){
ChangeForm(savedRecipes)
}


/*when user clicks on the profile image, they'll be taken to the profile page*/
btnProfileSearchR.onclick=function(){
ChangeForm(profile)
}


