export default function RecipeDetail({ recipe, onEdit, onDelete, onBack }) {
  const totalMin = (recipe.prep_time ?? 0) + (recipe.cook_time ?? 0);
  return (
    <div className="recipe-detail">
      <button className="btn-back" onClick={onBack}>← Back</button>
      <div className="detail-header">
        <div>
          <h1>{recipe.title}</h1>
          {recipe.category && <span className="badge">{recipe.category}</span>}
          {recipe.description && <p className="description">{recipe.description}</p>}
        </div>
        <div className="detail-actions">
          <button className="btn-secondary" onClick={onEdit}>Edit</button>
          <button className="btn-danger" onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
      </div>

      <div className="meta-row">
        {recipe.servings && <span>🍽 {recipe.servings} servings</span>}
        {recipe.prep_time && <span>⏱ {recipe.prep_time} min prep</span>}
        {recipe.cook_time && <span>🔥 {recipe.cook_time} min cook</span>}
        {totalMin > 0 && <span>⏰ {totalMin} min total</span>}
      </div>

      <div className="detail-columns">
        <section>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </section>
        <section>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </section>
      </div>
    </div>
  );
}
