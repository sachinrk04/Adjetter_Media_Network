import React, { Component } from 'react';
// import { connect } from  'react-redux';

// import * as actions from '../../store/actions';
import './NameList.css';
import List from './List/List';

class NameList extends Component {
    render() {
        return (
            <div className="NameList">
                <ul>
                    {this.props.usersList.map((userList, key) => (
                        <List userList={userList} key={key}/>
                    ))}
                    
                </ul>
            </div>
        );
    }
}


export default NameList;