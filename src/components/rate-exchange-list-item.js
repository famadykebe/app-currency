import React from 'react';
import ReactChartKick, {AreaChart} from 'react-chartkick';
import Chart from 'chart.js';
ReactChartKick.addAdapter(Chart);
const RateExchangeListItem = ({element}) => {

    const {name,flage,currencyCode,rates} = element;

    function dateFormatChart(rate,currencyCode){

       return Object.keys(rate).map(element => {

         
            return  [element,rate[element][currencyCode]]

        })

    }

    return (
        
      <tr>
          <td>
            {name}<br />
            <img src={flage} alt=""  className="img-country"/>
          </td>

          <td className="col-12">
              <AreaChart data={dateFormatChart(rates,currencyCode)} xtitle="Date" ytitle={currencyCode}/>
          </td>
      </tr>
    )
}

export default RateExchangeListItem