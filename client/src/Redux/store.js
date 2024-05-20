import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  updateUserProfileReducer,
  userChangePasswordReducer,
  getFavoriteMoviesReducer,
  deleteFavoriteMoviesReducer,
  reviewMovieReducer,
  likeMovieReducer
} from "./Reducers/userReducer";

import {
  adminDeleteCategoriesReducer,
  adminCreateCategoryReducer,
  adminUpdateCategoryReducer,
  getCategoriesReducer,
} from "./Reducers/categoryReducer";

import {
  getAllMoviesReducre,
  getDetailsMovieReducre,
  getRandomMoviesReducre,
  getTopRateMoviesReducre
} from "./Reducers/movieReducer";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  updateUserProfile: updateUserProfileReducer,
  userChangePassword: userChangePasswordReducer,
  reviewMovie:reviewMovieReducer,
  getFavoriteMovies: getFavoriteMoviesReducer,
  deleteFavoriteMovies: deleteFavoriteMoviesReducer,
  getCategories: getCategoriesReducer,
  getAllMovies: getAllMoviesReducre,
  getDetailsMovie: getDetailsMovieReducre,
  getRandomMovies:getRandomMoviesReducre,
  getTopRateMovies:getTopRateMoviesReducre,
  likeMovie:likeMovieReducer,
  
  adminDeleteCategories: adminDeleteCategoriesReducer,
  adminCreateCategory: adminCreateCategoryReducer,
  adminUpdateCategory: adminUpdateCategoryReducer,

});

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
