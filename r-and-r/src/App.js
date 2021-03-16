import axios from "axios";
import RandomCard from "./components/RandomCard"
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"

import './App.css';

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
      <Navbar />
      <Route path="/">
      
      </Route>
      
      
    <div className="App">
    <RandomCard recipes={recipes}/>
        <Route path="/recipes/:id">
        
          
      </Route>
    </div>
    </div>
  );
}

export default App;
