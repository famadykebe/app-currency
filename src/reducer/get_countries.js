import {ac_get_countries} from '../actions/index';

const initState = {
  country: [],
};

export default function (state = initState, action){

  switch (action.type) {
    case ac_get_countries :
      return {
        ...state,
        country: action.payload,
      }
  }


  return state;
  
};



