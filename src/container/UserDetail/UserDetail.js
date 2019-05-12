import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';

import * as actions from '../../store/actions';

import './UserDetail.css';

class UserDetail extends Component {
    componentDidMount() {
        console.log("USER ID: ", this.props)
        const userName = this.props.match.params.username;
        this.props.getUserDetails(userName);
    }
    render() {
        const userName = this.props.match.params.username;
        return (
            <div className="UserDetail">
                <div>
                   <Avatar alt="Profile Picture" src={this.props.selectedUser.avatar_url} />
                   <h3>Title: <span>{this.props.selectedUser.name}</span></h3> 
                   <h4>Location: <span>{this.props.selectedUser.location}</span></h4> 
                   <h4>Created Time: <span>{this.props.selectedUser.created_at}</span></h4> 
                   <h4>Updated Time: <span>{this.props.selectedUser.updated_at}</span></h4> 
                   <p className="repo-link"> <Link to={`/${userName}/repositories`}> get repositories...</Link> </p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    selectedUser: state.github.selectedUser
});
const mapDispatchToProps =  ({
    getUserDetails: (userName) => actions.getUserDetails(userName)
})
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);