import axios from "axios";
import { useHistory } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { config, baseURL } from "../services";

export default function Form(props) {
  const [itemName, setItemName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [typesOfDishes, setTypesOfDishes] = useState("");
  const history = useHistory()
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const newDish = {
      itemName,
      instructions,
      description,
      ingredients,
      cookTime,
      typesOfDishes,
    };
    alert("New Recipe Created!")
    history.push('/')
    await axios.post(baseURL, { fields: newDish }, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div>
      <h1>Add your own recipe here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <br />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Cook Time"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        />
        <br />
        <select
          required
          value={typesOfDishes}
          onChange={(e) => setTypesOfDishes(e.target.value)}
        >
          <option disabled defaultValue></option>
          <option>beverages</option>
          <option>bigPlate</option>
          <option>smallPlates</option>
        </select>
        <button type="submit">add</button>
      </form>
    </div>
  );
}
