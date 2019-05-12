import axios from 'axios';
import * as actionTypes from './actionTypes';

// _______________________________________________SEARCH_GIT_USER_____________________________________

export const searchStart = () => {
    return {
        type: actionTypes.SEARCH_START,
    }
}

export const searchSuccess = (searchedUser) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        payload: searchedUser
    }
}

export const searchFail = (error) => {
    return {
        type: actionTypes.SEARCH_FAIL,
        error: error
    }
}

export const searchGitUser = serachTerm => dispatch => {
    dispatch(searchStart());        
    let targetUrl = `https://api.github.com/search/users?q=${serachTerm}`;
    const promise =  axios.get(targetUrl);

    return new Promise((resolve, reject) => {
        promise
        .then(response => {
            console.log("API: ", response);
            dispatch(searchSuccess(response.data.items));
            return response;
        })
        .catch(error => {
            console.log(error);
            dispatch(searchFail("somethig went wrong"));
            throw error;
        })
    })

}


// ____________________________________________________________GIT_USER_DETAIL_______________________________

export const userDetailStart = () => {
    return {
        type: actionTypes.SEARCH_START,
    }
}

export const userDetailSuccess = (userDetails, currentUser) => {
    return {
        type: actionTypes.USER_DETAIL,
        payload: {userDetails,currentUser}
    }
}

export const userDetailFail = (error) => {
    return {
        type: actionTypes.SEARCH_FAIL,
        error: error
    }
}

export const getUserDetails = (userName) => dispatch => {
    dispatch(userDetailStart());        
    let targetUrl = `https://api.github.com/users/${userName}`;
    const promise =  axios.get(targetUrl);

    return new Promise((resolve, reject) => {
        promise
        .then(response => {
            console.log("API: ", response);
            dispatch(userDetailSuccess(response.data, userName));
            return response;
        })
        .catch(error => {
            console.log(error);
            dispatch(userDetailFail("somethig went wrong"));
            throw error;
        })
    })

} 
    

// __________________________________________________________GIT_USER_REPO___________________________________
export const userReposStart = () => {
    return {
        type: actionTypes.SEARCH_START,
    }
}

export const userReposSuccess = data => {
    return {
        type: actionTypes.USER_REPOS,
        payload: data
    }
}

export const userReposFail = (error) => {
    return {
        type: actionTypes.SEARCH_FAIL,
        error: error
    }
}

export const getUserRepos = (userName) => dispatch => {
    dispatch(userReposStart());        
    let targetUrl = `https://api.github.com/users/${userName}/repos`;
    const promise =  axios.get(targetUrl);

    return new Promise((resolve, reject) => {
        promise
        .then(response => {
            console.log("API: ", response);
            dispatch(userReposSuccess(response.data));
            return response;
        })
        .catch(error => {
            console.log(error);
            dispatch(userReposFail("somethig went wrong"));
            throw error;
        })
    })

} 
  

// _____________________________________________________ADD_NEW_USER_____________________________________________

export const addNewUser = (login) => {
    return {
        type: actionTypes.ADD_USER,
        newUserData: login,
    }
}
  
// ____________________________________________________REMOVE_USER________________________________________________

export const removeUser = (login) => {
    return {
        type: actionTypes.REMOVE_USER,
        removeData: login,
    }
}
    