import React, { Component } from 'react';
import {connect} from "react-redux";

import * as actions from '../../store/actions';

import './SearchBar.css';

class SearchBox extends Component {
    state = {
        searchTerm: "",
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({ searchTerm: value }));
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("SEARCH::", this.state.searchTerm)
        this.props.searchGitUser(this.state.searchTerm)
        .then( res => console.log("RRRRR:", res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBox-Div" >
                  <form onSubmit={this.submitForm}>
                    <input 
                      value={this.state.searchTerm} 
                      onChange={this.onTextChanged} 
                      type="text" 
                      className="SearchBox-Input" 
                      placeholder="Search Name" />
                      <button type="submit" className="SearchBox-Button">Search</button>
                  </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    usersList: state.github
});

const mapDispatchToProps =  ({
    searchGitUser: user => actions.searchGitUser(user)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);