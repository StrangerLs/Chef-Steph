import React from "react";

import { useParams, Link } from "react-router-dom";

export default function Card(props) {
  const params = useParams();

  if (!props.recipe) {
    return <></>;
  }

  return (
    <div>
      <Link to={`/recipe/${props.recipe.id}`}>
        <h2>{props.recipe.fields.itemName}</h2>
      </Link>
      <h3>{props.recipe.fields.ingredients}</h3>
      <h3>{props.recipe.fields.description}</h3>
      <h4>{props.recipe.fields.cookTime}</h4>
    </div>
  );
}
