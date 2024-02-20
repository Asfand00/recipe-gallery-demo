import React from "react";

const recipes = [
  { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://www.aberdeenskitchen.com/wp-content/uploads/2019/02/Classic-Spaghetti-Carbonara-5-680x1024.jpg"},
  { id: 2, title: "Lasagna", ingredients: ["Lasagna Sheets", "Parmesan", "Mozzarella", "Parsley", "Ricotta", "Bechamel", "Ragu Bolognese"], image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-4272x2848.jpg"},
  { id: 3, title: "Butter Chicken", ingredients: ["Chicken Breast", "Spices", "Heavy Cream", "Garlic", "Cilantro", "Butter", "Ginger", "Oil", "Tomato Sauce"], image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"},
]

const RecipeGallery = () => {
  return (
    <div className="recipe-gallery">
      {recipes.map(recipe => (
        
        <div key={recipe.id} className="recipe-card">
          
          <h3>{recipe.title}</h3>
          <ul>
            
            {recipe.ingredients.map((ingredient, index) => (
              
              <li key={index}>{ingredient}</li>
            
            ))}
          
          </ul>
          <img src={recipe.image} alt={recipe.title} />
        
        </div>
      ))}
    </div>
  );
}




export default RecipeGallery