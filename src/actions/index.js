import axios from 'axios';
import supportedCurrencieCode from '../supportedCurrencieCode'
export const ac_get_countries = 'ac_get_countries';
export const ac_rate_currency = 'ac_rate_currency';
const url = 'https://restcountries.eu/rest/v2/all';


export function action_get_countrie(){

       return function(dispatch){
        
        axios.get(url).then(response => {
          
            dispatch({ type: ac_get_countries, payload:cleanData(response.data)})
        })

       }
    
}

export function rate_currency(country){

    console.log('country',country)

    return function(dispatch){

        const urlRateCountrie = `https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formateDate(new Date())}&base=USD&symbols=${country.currencyCode}`;

        axios.get(urlRateCountrie).then(response => {

            console.log('requet country info',response.data)

            dispatch({type:ac_rate_currency,payload:{rates:response.data.rates,...country}})
        })

    }

}

function formateDate(data){

    let date = data.toISOString(data).split('T')[0];

    return date
}

function getLastMonth(){

    let lastDate = new Date();

    lastDate.setMonth(lastDate.getMonth() -1);

    return formateDate(lastDate);

}



function cleanData(data){

    return data.map(element => {

        return {
            name:element.name,
            currencyCode:element.currencies[0].code,
            code:element.alpha3Code,
            flage:element.flag
        }
    }).filter(element => {
        return supportedCurrencieCode.indexOf(element.currencyCode ) > -1
    })

}


