import React from 'react';
import RateExchangeListItem from './rate-exchange-list-item';
import {connect} from 'react-redux';

const RateExchangeList = (props) => {

    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Pays</th>
            <th scope="col">Valeur de la monnaie par rapport au $</th>
          </tr>
          
        </thead>

        <tbody>
            {
                props.rateExchageList.map(element => {
                    return <RateExchangeListItem key={element.code} element={element}/>
                })
            }
        </tbody>
      </table>  
    )
}

const mapStateToProps = (state) => {

    return {
        rateExchageList:state.rateExchangeReducer.rateEchangeList
    }

}

export default connect(mapStateToProps,null)(RateExchangeList)
