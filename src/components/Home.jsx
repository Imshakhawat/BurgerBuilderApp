import React, {useState,useRef} from 'react';

import styles from '../index.css';
import { getIngredients,getIngredientsByid, getItems,getItemsByid } from '../services/ingredients_api';
import Ingredients from './ingredients'; 
import ItemsBar from './itemsBar';
import {useDrop} from 'react-dnd';
import TotalPriceTicket from './totalPriceTicket'
import BurgerBuilder from "./burgerBuilder";

const ingredient_list = getIngredients();
const items = getItems();



let totalPrice = 0;
const itemCount = new Array(100).fill(0);



const Home = (props) => {

  

  

  ///Adding from builder
  const [currentBurgerItems, setItems] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addItemsToBurger(item),
  }));
  //{item.type==="bar_item"?(item) => addItemsToBurger(item):null




  ///Deleting from builder
  const [currentBurgerItem2, setItem2] = useState([]);

  const [{ isOver0 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addItemsToBurger(item),
  }));


    const ItemBarRef = useRef(drop);
    const BurgerBuilderRef = useRef(drop2); 



  // const DeleteFromBurger = (item) => {
  //   console.log(item);
  //   const currentItem = ingredient_list.filter(
  //     (listItem) => listItem.id !== item.id);
    
  //   setItem2((currentBurgerItems) => [...currentBurgerItems, currentItem[0]]);
  //  console.log(currentBurgerItems);
  // };

  const addItemsToBurger = (item) => {
    
    

    if (itemCount[item.id] < 3 && item.type !== "builder_item") {
      itemCount[item.id]++;
      totalPrice += item.price;

      const currentItem = ingredient_list.filter(
        (listItem) => {

         // console.log(listItem, item);
          return listItem.ingredient_type === item.ingredient_type}
      );

      //console.log(currentItem[0]);
      currentItem[0].builderId = Math.floor(Math.random() * 100 + 1);

      setItems((currentBurgerItems) => [...currentBurgerItems, currentItem[0]]);
      
    }
    else{

      console.log(item, currentBurgerItem2);

            const currentItem = currentBurgerItem2.filter((listItem) => {
               console.log(listItem, item);
              return listItem.builderId !== item.builderId;
            });

      //console.log(currentItem);

     
    }
  };
  //console.log(drop2);
  return (
    // <h2>hello world</h2>

    //<ItemsBar item={items} ref={} />

    <div className="background">
      <h1 >Build Your Burger</h1>
      <div className="itemsContainer">
        {/* <ItemsBar item={items} ref={BurgerBuilderRef} /> */}
        

        <div>
          <h2 className="itemBarfonts">ITEMS</h2>
          <div className="itemsBar" ref={drop2}>
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

        <div className="burgerContainer">
          <div className="burger" ref={drop}>
           
            <Ingredients url={getIngredientsByid(1).url} />

            {currentBurgerItems.map((ingredient) => {
              return (
                <Ingredients
                  key={ingredient.id}
                  id={ingredient.id}
                  url={ingredient.url}
                  type={ingredient.type}
                  price={ingredient.price}
                  ingredient_type={ingredient.ingredient_type}
                  builderId={ingredient.builderId}
                />
              );
            })}

            <Ingredients url={getIngredientsByid(6).url} />
          </div>
        </div>
        <TotalPriceTicket Price={totalPrice} data = {props.data} />
        {/* <h1>{totalPrice}</h1> */}
      </div>
    </div>
  );
};

export default Home;
