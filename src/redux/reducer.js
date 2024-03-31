import reducerUser from "./reducerUser";
import reducerPost from "./reducerPost";
import reducerFavorite from "./reducerFavorite";

const stateInicial = {
    JWT_KEY : "",
    userData : {},
    allPosts : [],
    filterPosts : {
        type : "allPosts",
        value: "",
        data : [],
    },
    myFavorites : {
        idPosts : [],
        data    : [],
    },
};

function reducer (state = stateInicial, action){
    const { type, payload } = action;
    
    if( type.length > 0 ){     
        let newState = { };
        const [ , ENTITY ] = type.split("_")

        if( ENTITY === "USER" ){
            newState = reducerUser( state, type, payload );
            state    = { ...newState };
           
            // window.alert( "Success : everything was done correctly" );
            return({ ...state });
        }
        
        if( ENTITY === "POST" ){
            newState = reducerPost( state, type, payload );
            state    = { ...newState };

            // window.alert( "Success : everything was done correctly" );
            return({ ...state });
        }

        if( ENTITY === "FAVORITE" ){
            newState = reducerFavorite( state, type, payload );
            state    = { ...newState };

            // window.alert( "Success : everything was done correctly" );
            return({ ...state });
        }

        if( ENTITY === "CLEAR" ){         
            state    = { ...stateInicial };

            return({ ...state });
        }
    }

    return({ ...state })
}

export default reducer;