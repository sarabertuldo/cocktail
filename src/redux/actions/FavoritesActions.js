export const ADD_FAVORITE = "Add Favorite";
export const DELETE_FAVORITE = "Delete Favorite";

export function addFavorite(drink) {
  return { type: ADD_FAVORITE, favorite: drink };
}

export function deleteFavorite(id) {
  return { type: DELETE_FAVORITE, id: id };
}
