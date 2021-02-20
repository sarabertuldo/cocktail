import React from "react";
import "./DisplayPage.css";

export default function DisplayPage(props) {
  console.log(props);
  return (
    <>
      <img src={props.drink[5]["strDrinkThumb"]}></img>
      <h3>Ingredients</h3>
      <p>
        {props.drink[6]["strIngredient1"]}: {props.drink[21]["strMeasure1"]}
        {props.drink[7]["strIngredient2"]}: {props.drink[22]["strMeasure2"]}
        {props.drink[8]["strIngredient3"]}: {props.drink[23]["strMeasure3"]}
        {props.drink[9]["strIngredient4"]}: {props.drink[24]["strMeasure4"]}
        {props.drink[10]["strIngredient5"]}: {props.drink[25]["strMeasure5"]}
        {props.drink[11]["strIngredient6"]}: {props.drink[26]["strMeasure6"]}
        {props.drink[12]["strIngredient7"]}: {props.drink[27]["strMeasure7"]}
        {props.drink[13]["strIngredient8"]}: {props.drink[28]["strMeasure8"]}
        {props.drink[14]["strIngredient9"]}: {props.drink[29]["strMeasure9"]}
        {props.drink[15]["strIngredient10"]}: {props.drink[30]["strMeasure10"]}
        {props.drink[16]["strIngredient11"]}: {props.drink[31]["strMeasure11"]}
        {props.drink[17]["strIngredient12"]}: {props.drink[32]["strMeasure12"]}
        {props.drink[18]["strIngredient13"]}: {props.drink[33]["strMeasure13"]}
        {props.drink[19]["strIngredient14"]}: {props.drink[34]["strMeasure14"]}
        {props.drink[20]["strIngredient15"]}: {props.drink[35]["strMeasure15"]}
      </p>
    </>
  );
}