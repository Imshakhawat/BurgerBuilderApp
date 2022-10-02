import React from 'react';
import Ingredients from "../components/ingredients"; 


function ItemsBar({items}, ref) {
  console.log(ref);
    return (
      <div>
        <div className="itemsBar" ref={ref}>
          {items.map((ingredient) => {
            return (
              <Ingredients
                key={ingredient.id}
                id={ingredient.id}
                url={ingredient.url}
                type={ingredient.type}
                price={ingredient.price}
                ingredient_type={ingredient.ingredient_type}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ItemsBar;