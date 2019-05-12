import React, { Component } from 'react';
import {connect} from "react-redux";

import * as actions from '../../store/actions';
import './UserRepo.css';

class UserRepo extends Component {
    componentDidMount() {
        console.log("USER ID: ", this.props)
        const userName = this.props.match.params.username;
        this.props.getUserRepos(userName);
    }
    render() {
        return (
            <div className="UserRepo">
                <div>
                    <ol>
                        {this.props.repos.length > 0 ? this.props.repos.map((repo,key) => (
                            <li key={key}>{repo.full_name}</li>
                        )) : <li> No Repository </li> }
                    </ol>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    repos: state.github.selectedUserRepos
});
const mapDispatchToProps =  ({
    getUserRepos: (userName) => actions.getUserRepos(userName)
})
export default connect(mapStateToProps, mapDispatchToProps)(UserRepo);