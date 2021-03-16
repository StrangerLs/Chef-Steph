import Card from "./Card"
import React from 'react'

export default function RandomCard(props) {
  const { recipes } = props;
  
  const randoNumber = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[randoNumber]
  
  
  return (
    
    <div>
      <Card recipe={randomRecipe}/>
    </div>
    
  )
}
