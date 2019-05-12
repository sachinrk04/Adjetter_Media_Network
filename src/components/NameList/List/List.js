import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';

import * as actions from '../../../store/actions';

class List extends Component {
    render() {
        const userLink = `/${this.props.userList.login}/${this.props.userList.id}`;
        return (
            <li className="ListItem">
                <Link to={userLink}>
                    <h4>{this.props.userList.login} </h4>
                </Link>
                {/* <button className="Edit-Button">Edit</button> */}
                <button className="Edit-Button" onClick={() => this.props.remove(this.props.userList.login)}>Remove</button>
            </li>
        );
    }
}

const mapDispatchToProps =  ({
    remove: login => actions.removeUser(login)
})

export default connect(null, mapDispatchToProps)(List);