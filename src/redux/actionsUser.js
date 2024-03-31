import axios from "axios";
import * as ACTION from "./actionsTypes";

const { REACT_APP_URL_SERVER } = process.env;

export function registerUser( userData ) {
    return ( async (dispatch) => { 
        let userRegister = {};

        try {
            userRegister = await axios.post(`${ REACT_APP_URL_SERVER }/user/register`, userData);
                       
            dispatch({
                type    : ACTION.NEW_USER,
                payload : userRegister.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error registerUser : something was wrong" );
            }
        }
    });
}

export function loginUser( userData ) {
    return ( async (dispatch) => { 
        let userLogin = {};

        try {
            userLogin = await axios.post(`${ REACT_APP_URL_SERVER }/user/login`, userData);
                       
            dispatch({
                type    : ACTION.LOGIN_USER,
                payload : userLogin.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error loginUser : something was wrong" );
            }
        }
    });
}

export function modifyInformationUser( modifyData, token ) {
    return ( async (dispatch) => { 
        let userUpdated = {};

        try {
            userUpdated = await axios.put(
                `${ REACT_APP_URL_SERVER }/user/change`,
                modifyData,
                {                
                    headers: 
                    {
                        // 'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }        
                }                 
            );
                       
            dispatch({
                type    : ACTION.MODIFY_USER,
                payload : userUpdated.data
            })

        } catch (error) {            
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error modifyInformationUser : something was wrong" );
            }
        }
    });
}