import axios from 'axios';
import { ADD_FAV, DELETE_FAV,FILTER, ORDER } from './types';


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };
 export const deleteFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type:DELETE_FAV,
             payload: data,
          });
       });
    };
 }
 const filter = (name) => {
    return {
       type: FILTER,
       payload: name,
    };
 };
    const order = (order) => {
    return {
       type: ORDER,
       payload: order,
    };
    };
    module.exports = { addFav, deleteFav, filter, order };