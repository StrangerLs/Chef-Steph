import React from 'react'
import Card from "./Card"
import Navbar from "./Navbar"

export default function CardPage(props) {
  const { recipes } = props;
  console.log(props);
  return (
    <div>
      <Navbar/>
      {recipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id}/>
      ))}
    </div>
  )
}
