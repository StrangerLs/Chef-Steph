import React from "react";
import Card from "./Card";


export default function CardPage(props) {
  const { recipes } = props;
  return (
    <div className="card-container">
      {recipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
