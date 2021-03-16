
import Card from "./Card"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom";


export default function Plates(props) {
  const params = useParams();
  const { recipes } = props;
  console.log(recipes);
  const filteredRecipes = recipes.filter((recipe) => recipe.fields.typesOfDishes === params.type)
  return (
    <div>
      {filteredRecipes.map((recipe) => <Card recipe={recipe}/>)}
    </div>
  )
}
