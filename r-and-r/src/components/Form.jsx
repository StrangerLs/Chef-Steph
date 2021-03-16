import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { config, baseURL } from "../services";

export default function Form() {
  const [itemName, setItemName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [typesOfDishes, setTypesOfDishes] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newDish = {
      itemName,
      instructions,
      description,
      ingredients,
      cookTime,
      typesOfDishes,
    }
    await axios.post(baseURL, { fields: newDish }, config);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        <br/>
        <input type="text" placeholder="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <br/>
        <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br/>
        <input type="text" placeholder="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <br/>
        <input type="text" placeholder="Cook Time" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
        <br/>
        <select required placeholder="Dish Type" value={typesOfDishes} onChange={(e) => setTypesOfDishes(e.target.value)}>
          <option disabled selected></option>
          <option>beverages</option>
          <option>bigPlate</option>
          <option>smallPlates</option>
        </select>
        <button type="submit">add</button>
      </form>
    </div>
  )
}
