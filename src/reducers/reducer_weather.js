import {FETCH_WEATHER} from "../actions";

export default function (state=[], action) {
    
    switch (action.type) {
        case FETCH_WEATHER:
            //return promise has bunch of data that is irrelevant to us. All we care about is what is in "data" property
            //also we want to show charts of multiple cities user searched for, so naturally it's going to be
            //stored in an array (to avoid Array Mutations, or in other words manipulate state

             return [action.payload.data, ...state];//output: {city, city, city, city]
    }
    return state;
}