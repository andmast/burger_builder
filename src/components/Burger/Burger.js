import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
