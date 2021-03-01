import axios from 'axios';
import {GETTING_POST_REQUEST,GETTING_POST_SUCCESS,GETTING_POST_ERROR} from '../types/actionTypes'

const backendUrl ='https://testewe.herokuapp.com/articles/';
export const getPostAction = () => async (dispatch)=> {
   try {
    dispatch({
        type:GETTING_POST_REQUEST,
    })
       const response= await axios({method:'GET',
       url:`${backendUrl}`
    });
    let data=response.data.posts;
    console.log(data);
    dispatch({
        type:GETTING_POST_SUCCESS,
        payload:data
    })
       
   } catch (error) {
       dispatch({
           type:GETTING_POST_ERROR,
           payload:error.response
       })
   }
}
