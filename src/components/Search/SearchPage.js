import React, { useState } from "react";
import DisplayPage from "../DisplayPage/DisplayPage";
import "./SearchPage.css";
export default function SearchPage() {
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [limit, setLimit] = useState(25);
  const [drinks, setDrinks] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/";
  async function getDrinkByName(name) {
    let response = await fetch(`${url}search.php?s=${name}`);
    let json = await response.json();
    // console.log(json.drinks[0]);
    let newArrObject = [{}];
    for (const property in json.drinks[0]) {
      switch (property) {
        case "idDrink":
        case "strDrink":
        case "strAlcoholic":
        case "strInstructions":
        case "strDrinkThumb":
        case "strIngredient1":
        case "strIngredient2":
        case "strIngredient3":
        case "strIngredient4":
        case "strIngredient5":
        case "strIngredient6":
        case "strIngredient7":
        case "strIngredient8":
        case "strIngredient9":
        case "strIngredient10":
        case "strIngredient11":
        case "strIngredient12":
        case "strIngredient13":
        case "strIngredient14":
        case "strIngredient15":
        case "strMeasure1":
        case "strMeasure2":
        case "strMeasure3":
        case "strMeasure4":
        case "strMeasure5":
        case "strMeasure6":
        case "strMeasure7":
        case "strMeasure8":
        case "strMeasure9":
        case "strMeasure10":
        case "strMeasure11":
        case "strMeasure12":
        case "strMeasure13":
        case "strMeasure14":
        case "strMeasure15":
          newArrObject = [
            ...newArrObject,
            { [property]: json.drinks[0][property] },
          ];
          break;
      }
    }
    // console.log(newArrObject);
    setDrinks(newArrObject);
  }
  async function getDrinksByIngredient(ingredient) {
    let response = await fetch(`${url}filter.php?i=${ingredient}`);
    let json = await response.json();
    // console.log(json);
  }
  async function getDrinkByID(id) {
    let response = await fetch(`${url}filter.php?i=${ingredient}`);
    let json = await response.json();
  }
  function limitResults(num) {}
  return (
    <>
      <h1>Search</h1>
      <div>
        <label htmlFor="query">Name</label>
        <input
          type="text"
          value={name}
          placeholder="search"
          id="query"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredient">Ingredient</label>
        <input
          type="text"
          value={ingredient}
          placeholder="ingredient"
          id="ingredient"
          onChange={(e) => setIngredient(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="limit">Limit</label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <button
        className="button"
        onClick={() => getDrinkByName(name)}
        // onClick={() => getDrinks(query, ingredient, limit)}
      >
        Search name
      </button>
      <button
        className="button"
        onClick={() => getDrinksByIngredient(ingredient)}
        // onClick={() => getDrinks(query, ingredient, limit)}
      >
        Search Ingredient
      </button>
      {drinks.length !== 0 && (
        <DisplayPage key={drinks[1]} drink={drinks}></DisplayPage>
      )}
      {/* <div>
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 &&
          props.drinks.map((v) => (
            <DisplayPage
              key={v.id}
              drink={v}
              isFavorite={faveIds.includes(v.id)}
              deleteFavorite={props.deleteFavorite}
              addFavorite={props.addFavorite}
            />
          ))}
      </div> */}
    </>
  );
}
