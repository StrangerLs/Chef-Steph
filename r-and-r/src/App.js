import axios from "axios";
import CardPage from "./components/CardPage";
import RandomCard from "./components/RandomCard";
import Plates from "./components/Plates";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import RecipePage from "./components/RecipePage";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false)
  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(baseURL, config);
      setRecipes(response.data.records);
    };
    getRecipes();
  }, [toggleFetch]);
  return (
    <div className="homepage">
      <Navbar />
      <Route exact path="/">
        <h2>
          In case you're unsure what to make, here's a random recipe below!
        </h2>

        <RandomCard recipes={recipes} />
      </Route>
      <Route exact path="/recipes">
        <div>
          <CardPage recipes={recipes} />
        </div>
      </Route>

      <div className="App">
        <Route exact path="/recipe/:id">
          <RecipePage recipes={recipes} />
        </Route>
        <Route exact path="/form">
          <Form setToggleFetch={setToggleFetch}/>
        </Route>
        <Route exact path="/foods/:type">
          <Plates recipes={recipes} />
        </Route>
      </div>
    </div>
  );
}

export default App;
