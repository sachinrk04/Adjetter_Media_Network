import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SearchBox from '../../components/SearchBox/SearchBox';
import NameList from '../../components/NameList/NameList';

import './Home.css';
import AddUser from '../../components/AddUser/AddUser';
import Edit from '../../components/Edit/Edit';

class Home extends Component {
    state = {
        isAddUser: false,
        isEdit: false,
        currentUser: "",
    }

    openAddForm = () => {
        this.setState({ isAddUser: true })
    }

    closeForm = () => {
        this.setState({ isAddUser: false })
    }

    editFromOpen = (data) => {
        this.setState({ isEdit: true, currentUser: data })
    }

    editFromClose = () => {
        this.setState({ isEdit: false, currentUser: "" })
    }

    render() {
        let addUser = null;
        if(this.state.isAddUser) {
            addUser = <AddUser closeForm={this.closeForm} />
        }

        let edit = null;
        if(this.state.isEdit) {
            edit = <Edit editFromClose={this.editFromClose} currentUser={this.state.currentUser} history={this.props.history}/> 
        }
        return (
            <React.Fragment>
                {edit}
                <div className="search-grid-wrapper">
                    <SearchBox />
                    {
                        this.props.usersList.length > 0 ?

                        <div className="search-grid">
                        <div className="search-grid-list">
                            {this.props.usersList.length > 0 ? <NameList editFrom={this.editFromOpen} usersList={this.props.usersList}/> : null }
                            <div className="add-new-user">
                                <button onClick={this.openAddForm} >Add New user</button>
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
});
export default connect(mapStateToProps)(Home);