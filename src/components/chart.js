import _ from 'lodash';
import React from 'react';
import {Sparklines,SparklinesReferenceLine,SparklinesLine} from 'react-sparklines';


//To show an average temp,pressure,humidity in numbers
//To avoid confusing long decimal number, we wrap the result with round function to get an integer
function average(data) {
    //formula is simple sum all numbers and divide it by it's length
   return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color= {props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
        </div>
    )
}