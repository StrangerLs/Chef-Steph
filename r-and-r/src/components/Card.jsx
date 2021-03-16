import React from "react";

import { Link } from "react-router-dom";

export default function Card(props) {
  

  if (!props.recipe) {
    return <></>;
  }

  return (
    <div>
      
      <Link to={`/recipe/${props.recipe.id}`}>
        <h2>{props.recipe.fields.itemName}</h2>
      </Link>
      <h3>Ingredients: <br/>{props.recipe.fields.ingredients}</h3>
      <h3>description: <br/>{props.recipe.fields.description}</h3>
      <h4>cook Time: <br/>{props.recipe.fields.cookTime}</h4>
    </div>
  );
}
