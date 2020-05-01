//import information from database to populate the listgroup
var query = " "
var req = " "
var results = " "
var categories = " "
var userChoices = []

searchPage.onshow=function( ) {
    query = 'SELECT category_name FROM category'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkv49774&pass=Vm6141!!&database=mkv49774&query=" + query)
    categories = results

    if (req.status == 200) {
    results = JSON.parse(req.responseText)
    categoryList.clear()
    for (i = 0; i<= categories.length - 1; i++)
      categoryList.addItem(categories[i])
}
}

/*this is the array that the ingredients selected by the user will go into */
categoryList.onclick=function(){
    query = "SELECT ingredient_name FROM ingredient WHERE category_id = 1"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkv49774&pass=Vm6141!!&database=mkv49774&query=" + query)
    if (req.status == 200) {
      results = JSON.parse(req.responseText)
      ingredients = results
      ingredientItems.clear()
      for (i = 0; i<= ingredients.length - 1; i++)
      ingredientItems.addItem(ingredients[i])
}
}
  
  Submit.onclick=function(){
    for (i = 0; i <= ingredientItems.text.length - 1; i ++) {
  userChoices = ingredientItems.text[i]
  console.log(userChoices)
  ChangeForm(searchResults)
}
  }









/*when user clicks on the search image, they'll be taken to the search page*/
btnHomeSearchP.onclick=function(){
ChangeForm(homeScreen)
}

/*when user clicks on the search image, they'll be taken to the search page*/
btnSearchSearchP.onclick=function(){
ChangeForm(searchPage)
}

/*when user clicks on the star image, they'll be taken to the saved recipes page*/
btnSavedRecipesSearchP.onclick=function(){
ChangeForm(savedRecipes)
}


/*when user clicks on the profile image, they'll be taken to the profile page*/
btnProfileSearchP.onclick=function(){
ChangeForm(profile)
}









