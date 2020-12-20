import React, { Component } from 'react';
import {connect} from 'react-redux';
import {action_get_countrie,rate_currency} from '../actions/index'

 class country extends Component {

    constructor(props){

        super(props)
    }

    componentWillMount(){

        this.props.action_get_countrie();

    }

    componentDidMount(){ 

    }

    onChangeCountry(e){
        
        let countryCode = e.target.value;

       let country = this.props.countrie.country.find(element => {
            return element.code == countryCode;
        })

        this.props.rate_currency(country);
    }
    render() {

        return (
            <form className="col-12">

                <select className="form-control" onChange={(e) => {this.onChangeCountry(e)}}>
                    
                   {
                       
                         this.props.countrie.country.map(element => {


                            return(
                                <option key={element.code} value={element.code}>{element.name}</option>
                            )

                         })
                   }

                </select>   
                
            </form>
        )
    }
}
const mapStateToProps = (state) => {


    return {
        countrie: state.reducer_countries,
        rateExchageList:state.rateExchangeReducer.rateEchangeList
    }

}

const mapDispachToProps = {
    action_get_countrie:action_get_countrie,
    rate_currency:rate_currency

}




export default connect(mapStateToProps,mapDispachToProps)(country);
