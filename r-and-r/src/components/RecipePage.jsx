import React from "react";
import { useParams } from "react-router-dom";

import Card from "./Card";




export default function RecipePage(props) {
  const params = useParams();
  const specRecipe = props.recipes.find((recipe) => recipe.id === params.id);

  if (!specRecipe) {
    return <></>
  }
  
  const {instructions} = specRecipe.fields
  return (
    <div className="recipe">
      <Card recipe={specRecipe}/>
      <p>Instructions: <br/>{instructions}</p>
    </div>
  )
}
