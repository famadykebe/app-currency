import {ac_rate_currency} from '../actions/index';

const initState = {
  rateEchangeList: [],
};

export default function (state = initState, action){

  switch (action.type) {
    case ac_rate_currency :
      return {
        ...state,
        rateEchangeList: [action.payload,...state.rateEchangeList],
      }
  }


  return state;
  
};
