import axios from "axios";
import * as ACTION from "./actionsTypes";

const { REACT_APP_URL_SERVER } = process.env;

export function modifyMyFavorite( whatToDo, idPost, token ) {
    return ( async (dispatch) => { 
        let isFavorite = {};

        try {
            if ( whatToDo === ACTION.ADD_FAVORITE ){
                isFavorite = await axios.post(
                    `${ REACT_APP_URL_SERVER }/favorite/check/${ idPost }`,
                    { },
                    {                
                        headers: { 'Authorization': `Bearer ${token}` }
                    }        
                );
            }
            if ( whatToDo === ACTION.REMOVE_FAVORITE ){
                isFavorite = await axios.delete(
                    `${ REACT_APP_URL_SERVER }/favorite/uncheck/${ idPost }`,
                    {                
                        headers: { 'Authorization': `Bearer ${token}` }
                    }        
                );
            }                

            dispatch({
                type    : ACTION[ whatToDo ],
                payload : isFavorite.data,
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error modifyMyFavorite : something was wrong" );
            }
        }
    });
}