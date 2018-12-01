import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions";

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state= {term:''};

        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value})
    }

    //When it comes to user input the best way to execute that is using "forms"
    //because it gives us a lot of functionality, so we don't have to create to many custom handlers for input data
    //however due to nature of how forms are handled by browser we also should use function "preventDefault" to
    //stop forms from trying to submit an input

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        //to clear input we just set state ('term') after submit to be empty
        this.setState({term:''});
    }

    //fetch data

    render (){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">

                <input
                    placeholder="Get a five days forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

//We are passing null here because this container doesn't care about any state
export default connect (null, mapDispatchToProps)(SearchBar)