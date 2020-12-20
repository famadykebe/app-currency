import {combineReducers} from 'redux';
import reducer_countries from './get_countries';
import rateExchangeReducer from './rate_currency';

const rootReducer = combineReducers({

    reducer_countries: reducer_countries,
    rateExchangeReducer: rateExchangeReducer

})

export default rootReducer;

