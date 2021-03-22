import Card from "./Card";
import { useParams } from "react-router-dom";

export default function Plates(props) {
  const params = useParams();
  const { recipes } = props;
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.fields.typesOfDishes === params.type
  );
  return (
    <div className="plates">
      {filteredRecipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
