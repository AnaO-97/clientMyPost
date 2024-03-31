import axios from "axios";
import * as ACTION from "./actionsTypes";

const { REACT_APP_URL_SERVER } = process.env;

export function createMyPost( postData, token ) {
    return ( async (dispatch) => { 
        let newPost = {};

        try {
            newPost = await axios.post(
                `${ REACT_APP_URL_SERVER }/post`,
                postData,
                {                
                    headers: 
                    {
                        // 'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }        
                }        
            );
                       
            dispatch({
                type    : ACTION.NEW_POST,
                payload : newPost.data,
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error createMyPost : something was wrong" );
            }
        }
    });
}

export function getAllPosts( token ) {
    return ( async (dispatch) => { 
        let response = {};

        try {
            response = await axios.get(
                `${ REACT_APP_URL_SERVER }/post/all`,
                {                
                    headers: { 'Authorization': `Bearer ${token}` }
                }        
            );            
                
            dispatch({
                type    : ACTION.ALL_POST,
                payload : {
                    allPostsData  : response.data.allPosts,
                    favoritesData : response.data.allFavorites,
                }
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error getAllPosts : something was wrong" );
            }
        }
    });
}

export function filterPosts( filterObj ) {
    return ({
        type    : ACTION.FILTER_POST,
        payload : filterObj
    });
}

export function updatePost( token, postModify) {
    return ( async (dispatch) => { 
        let objPostUpdated = {};

        try {
            objPostUpdated = await axios.put(
                `${ REACT_APP_URL_SERVER }/post/${ postModify.id }`,
                postModify,
                {                
                    headers: { 'Authorization': `Bearer ${token}` }
                }        
            );                     
                       
            dispatch({
                type    : ACTION.MODIFY_POST,
                payload : objPostUpdated.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error updateMyPost : something was wrong" );
            }
        }
    });
}

export function deletePost( token, idPost ) {
    return ( async (dispatch) => { 
        let postDeleted = {};

        try {
            postDeleted = await axios.delete(
                `${ REACT_APP_URL_SERVER }/post/${ idPost }`,                
                {                
                    headers: { 'Authorization': `Bearer ${token}` }
                }        
            );                     
                       
            dispatch({
                type    : ACTION.DELETE_POST,
                payload : postDeleted.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error deletePost : something was wrong" );
            }
        }
    });
}