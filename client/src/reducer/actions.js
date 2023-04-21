import axios from 'axios';
import { ADD_FAV, DELETE_FAV,FILTER, ORDER } from './types';


/*export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };*/
 export const addFav = async  (character) => {
   
      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav';
         const  {data} = await axios.post(endpoint , character);
            
         return ( dispatch) => {
            return dispatch({
               type: ADD_FAV,
               payload: data,
         });
      }
      }catch (error) {
         console.log (error);
      
      }
   }


 /*export const deleteFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type:DELETE_FAV,
             payload: data,
          });
       });
    };
 }*/

   export const deleteFav = character  => {
      return async (dispatch) => {
      try {
         const endpoint = `http://localhost:3001/rickandmorty/fav/${character.id}`;
         const {data} = await axios.delete(endpoint, character);
         
         return dispatch({
               type:DELETE_FAV,
               payload: data,
            });
         
      }catch (error) {
         console.log (error);
      }
      }
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