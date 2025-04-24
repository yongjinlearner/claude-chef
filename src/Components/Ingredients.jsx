import React from 'react';

function toggleRecipeShown() {
    console.log("Toggle recipe button clicked");
}

export default function Ingredients({ ingredients }) {
    return (
        ingredients.length > 0 && <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>

            <div className="get-recipe-container">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>

                <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>
        </section >
    )
}