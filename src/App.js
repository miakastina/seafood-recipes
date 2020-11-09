import './App.css';
import React, {Component} from 'react';

const FoodItem = [
  {name: 'Baked salmon with fennel & tomatoes'},
  {name: 'Cajun spiced fish tacos'},
  {name: 'Escovitch Fish'},
  {name: 'Fish pie'},
  {name: 'Fish Stew with Rouille'},
  {name: 'Garides Saganaki'},
  {name: 'Honey Teriyaki Salmon'},
  {name: 'Kedgeree'},
  {name: 'Kung Po Prawns'},
  {name: 'Laksa King Prawn Noodles'},
  {name: 'Mediterranean Pasta Salad'},
  {name: 'Recheado Masala Fish'},
  {name: 'Salmon Avocado Salad'},
  {name: 'Salmon Prawn Risotto'},
  {name: 'Saltfish and Ackee'},
  {name: 'Seafood fideuà'},
  {name: 'Shrimp Chow Fun'},
  {name: 'Sledz w Oleju (Polish Herrings)'},
  {name: 'Three Fish Pie'},
  {name: 'Tuna and Egg Briks'},
  {name: 'Tuna Nicoise'},

];

class RecipeDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: null
    }
  }

  componentDidMount() {
    const name = this.props.name;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+name;
    fetch (url)
    .then(
      response => response.json())
      .then(data => this.setState({ recipes: data.meals}))
    
  }

  render() {
    const recipes = this.state.recipes;
    return (
      <div class="row no-gutters">
        {
          recipes && recipes.map((recipe, index) => (     
              <div class="col-md-4" key={index}>
              <img className="recipe_img" src={recipe.strMealThumb} alt='Food'/>
              
              </div>
              
          ))
        }
        {
          recipes && recipes.map((recipe, index) => (     
              <div class="col-md-8" key={index}>
              <h3>{recipe.strMeal} </h3>
              <h5>{recipe.strCategory}</h5>
              
              <p>{recipe.strInstructions}</p>
             
              </div>
              
          ))
        }
      </div>
      
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentFoodRecipes: 0
    }
  }

  render() {
    return (
      <div className="App">
      <div>
        <nav class="navbar justify-content-center navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Seafood Recipes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      
        </nav>
         
        </div>
        {
          FoodItem.map((item, index) => (
            <button
            key={index}
            onClick={() => this.setState({ currentFoodRecipes: index})} class="btn btn-dark btn-sm"
            >
            {item.name}
            </button>
          )
          )
        }

        <RecipeDisplay key={this.state.currentFoodRecipes} name={FoodItem[this.state.currentFoodRecipes].name}/>
      </div>
    );
  }
}

export default App;
