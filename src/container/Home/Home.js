import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SearchBox from '../../components/SearchBox/SearchBox';
import NameList from '../../components/NameList/NameList';

import './Home.css';
import AddUser from '../../components/AddUser/AddUser';

class Home extends Component {
    state = {
        isAddUser: false,
    }

    openForm = () => {
        this.setState({
            isAddUser: true,
        })
    }

    closeForm = () => {
        this.setState({
            isAddUser: false,
        })
    }

    render() {
        let addUser = null;
        if(this.state.isAddUser) {
            addUser = <AddUser />
        }
        return (
            <React.Fragment>
                <div className="search-grid-wrapper">
                    <SearchBox />
                    {
                        this.props.usersList.length > 0 ?

                        <div className="search-grid">
                        <div className="search-grid-list">
                            {this.props.usersList.length > 0 ? <NameList usersList={this.props.usersList}/> : null }
                            {this.props.addNewUser.length > 0 ? <NameList usersList={this.props.addNewUser}/> : null }
                            <div className="add-new-user">
                                <button onClick={this.openForm} >Add New user</button>
                                {addUser}
                            </div>
                        </div>
                        
                        <div className="search-grid-recent">
                            <h4 style={{textAlign:"center"}}>Recent selected</h4>
                            <ol>
                            {this.props.recentSearchedName.length > 0 ? this.props.recentSearchedName.map((list, key) => (
                                <li key={key}>
                                    <Link to={`/${list}`}>{list}</Link>
                                </li>
                            )) : <li> No Recent selected </li>}
                            </ol>
                        </div>
                    </div>

                        : null 
                    }
                    
                </div>    
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    usersList: state.github.searchedResults,
    recentSearchedName: state.github.recentSearchedName,
    addNewUser: state.github.addNewUser,
});
export default connect(mapStateToProps)(Home);