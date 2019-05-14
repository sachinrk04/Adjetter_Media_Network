import React, { Component } from 'react';
// import { connect } from  'react-redux';

// import * as actions from '../../store/actions';
import './NameList.css';
import List from './List/List';

class NameList extends Component {
    render() {
        console.log("NAMELIST UPDATE", this.props.usersList)
        return (
            <div className="NameList">
                <ul>
                    {this.props.usersList.map((userList, key) => (
                        <List editFrom={this.props.editFrom} userList={userList} key={key}/>
                    ))}
                    
                </ul>
            </div>
        );
    }
}


export default NameList;