import React, { useState } from "react";
import "./FavoritesPage.css";
import DisplayPage from "../DisplayPage/DisplayPage";
import { deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";

const FavoritesPage = (props) => {
  return (
    <>
      <h1>Favorites</h1>;
      <div>
        {props.favorites.map((v) => (
          <DisplayPage
            key={v.id}
            drink={v}
            isFavorite={true}
            deleteFavorite={props.deleteFavorite}
          />
        ))}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteFavorite,
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
