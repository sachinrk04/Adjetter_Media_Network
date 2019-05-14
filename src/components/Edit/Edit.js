import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from '../../store/actions';

import './Edit.css';

class Edit extends Component {
    state = {
        editUser: ""
    }

    componentDidMount() {
        this.setState({editUser:this.props.currentUser})
    }

    handleChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({ editUser: value }));
    }

    editFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            currentUser: this.props.currentUser,
            updateUser: this.state.editUser
        }
        this.props.updateUser(data);
        this.props.editFromClose();
        this.props.history.push(`/${this.state.editUser}`)
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="edit-container" onClick={this.props.editFromClose} />
                <div className="Edit-box">
                    <div>
                        <h4>Enter new UserName</h4>
                        <div>
                            <form onSubmit={this.editFormSubmit}>
                                <input type="text" value={ this.state.editUser} onChange={this.handleChanged} />
                                <button type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps =  ({
    updateUser: login => actions.updateUser(login)
})


export default connect(null, mapDispatchToProps)(Edit);
