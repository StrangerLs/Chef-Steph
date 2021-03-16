import axios from "axios";
import CardPage from "./components/CardPage";
import RandomCard from "./components/RandomCard"
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import './App.css';
import RecipePage from "./components/RecipePage";


function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(baseURL, config)
      setRecipes(response.data.records);
    }
    getRecipes();
  }, [])
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <h2>Not sure what to cook? pick a random recipe below!</h2>
      <RandomCard recipes={recipes}/>
      </Route>
      <Route exact path="/recipes">
      <CardPage recipes={recipes}/>
      </Route>
      
    <div className="App">
    
        <Route exact path="/foods/:id">
          <RecipePage recipes={recipes}/>
      </Route>
    </div>
    </div>
  );
}

export default App;
