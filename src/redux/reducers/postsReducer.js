import {GETTING_POST_REQUEST,GETTING_POST_SUCCESS,GETTING_POST_ERROR} from '../types/actionTypes'

const initialState = {
    loading: false,
    success: false,
    error: '',
  };  
  export const getPostReducer = (state=initialState,action) => {
      switch (action.type) {
          case GETTING_POST_REQUEST:
            return{
                ...state,
                loading:true
            }
      case GETTING_POST_SUCCESS:
          return{
              ...state,
              loading:false,
              success:action.payload
          }
          case GETTING_POST_ERROR:
              return{
                  ...state,
                loading:false,
                error:action.payload  
              }
          default:
              return state;
      }
     
  }
  