import React from 'react'
import Card from "./Card"
import Navbar from "./Navbar"

export default function CardPage(props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id}/>
      ))}
    </div>
  )
}
