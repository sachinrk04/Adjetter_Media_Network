import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from '../../store/actions';

import './AddUser.css';

class AddUser extends Component {
    state = {
        userName: '',
    }

    nameChangedHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    AddFormSubmit = (e) => {
        e.preventDefault();
        this.props.Add(this.state.userName)
        this.props.closeForm();
    }

    render() {
        return (
            <React.Fragment>
               <div className="AddUser">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        onChange={this.nameChangedHandler}
                        value={this.state.userName} />
                    {this.state.userName.length > 0 ? <button onClick={this.AddFormSubmit}>Add</button> : null}
                </div> 
            </React.Fragment>
        );
    }
}

const mapDispatchToProps =  ({
    Add: login => actions.addNewUser(login)
})

export default connect(null, mapDispatchToProps)(AddUser);