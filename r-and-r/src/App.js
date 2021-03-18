import axios from "axios";
import CardPage from "./components/CardPage";
import RandomCard from "./components/RandomCard"
import Plates from "./components/Plates"
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Form from "./components/Form";
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
    <div className="homepage">
        <Navbar />
      <Route exact path="/">
        <h2>In case youre unsure what to make, heres a random recipe below!</h2>
      <RandomCard recipes={recipes}/>
      </Route>
      <Route exact path="/recipes">
      <CardPage recipes={recipes}/>
      </Route>
      
    <div className="App">
    
        <Route exact path="/recipe/:id">
          <RecipePage recipes={recipes}/>
        </Route>
        <Route exact path="/form">
       
          <Form/>
        </Route>
        <Route exact path="/foods/:type">
          <Plates recipes={recipes}/>
        </Route>
    </div>
    </div>
  );
}

export default App;
