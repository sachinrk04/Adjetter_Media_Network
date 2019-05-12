import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchedResults: [],
    recentSearchedName: [],
    selectedUser: {},
    selectedUserRepos: [],
    addNewUser: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_SUCCESS:
        return {
            ...state,
            searchedResults: [...action.payload],
        };
        case actionTypes.USER_DETAIL:
        const recentUsers = [...state.recentSearchedName];
        if(!recentUsers.includes(action.payload.currentUser)) {
            recentUsers.push(action.payload.currentUser)
        }
        return {
            ...state,
            recentSearchedName: recentUsers,
            selectedUser: action.payload.userDetails,
        };
        case actionTypes.USER_REPOS:
        return {
            ...state,
            selectedUserRepos: [...action.payload],
        };

        case actionTypes.ADD_USER:
        const newUser = {
            id: Math.random(),
            login: action.newUserData
        }
        console.log("NewUser:" ,newUser);
        return {
            ...state,
            addNewUser: state.addNewUser.concat(newUser)
        }

        case actionTypes.REMOVE_USER:
        return {
            ...state,
            searchedResults: state.searchedResults.filter(user => user.login !== action.removeData ),
            addNewUser: state.addNewUser.filter(user => user.login !== action.removeData )
        }

        default: return state
    }
}

export default reducer;