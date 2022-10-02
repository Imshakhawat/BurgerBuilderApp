import React from 'react';
import Ingredients from "../components/ingredients"; 
import { getIngredientsByid,} from "./../services/ingredients_api";


// function BurgerBuilder(props,ref) {
//     return (
//       <div className="burgerContainer">
//         <div className="burger" ref={ref}>
//           <Ingredients url={getIngredientsByid(1).url} />

//           {props.currentBurgerItems.map((ingredient) => {
          
//             return (
//               <Ingredients
//                 key={ingredient.id}
//                 id={ingredient.id}
//                 url={ingredient.url}
//                 type={ingredient.type}
//                 price={ingredient.price}
//                 ingredient_type={ingredient.ingredient_type}
//                 builderId={ingredient.builderId}
//               />
//             );
//           })}

//           <Ingredients url={getIngredientsByid(6).url} />
//         </div>
//       </div>
//     );
// }

// export default BurgerBuilder;