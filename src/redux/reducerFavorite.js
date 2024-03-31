import * as ACTION from "./actionsTypes";

export default function reducerFavorite ( state, type, payload ) {    
    if( type === ACTION.ADD_FAVORITE ){
        const { PostId }     = payload;
        const [ postAdd ]    = state.allPosts.filter( ( post )=> post.id === PostId );
        const allPostUpdated = state.allPosts.map( ( post )=> { 
            if ( post.id === PostId ){
                post.likes = post.likes + 1;
            }
            return post; 
        }); 
       
        return({
            ...state,
            allPosts    : [ ...allPostUpdated ],
            myFavorites : {
                data    : [ postAdd, ...state.myFavorites.data    ],
                idPosts : [ PostId,  ...state.myFavorites.idPosts ],
            }
        })
    }

    if( type === ACTION.REMOVE_FAVORITE ){
        const withoutPostData     = state.myFavorites.data.filter( (post)=> post.id !== payload.PostId )
        const withoutPostIdPosts  = state.myFavorites.idPosts.filter( (Id)=> Id !== payload.PostId );
        const allPostUpdated = state.allPosts.map( ( post )=> { 
            if ( post.id === payload.PostId ) 
                post.likes = post.likes - 1;
            return post; 
        }); 

        return({
            ...state,
            allPosts    : [ ...allPostUpdated ],
            myFavorites : {
                data    : [ ...withoutPostData ],
                idPosts : [ ...withoutPostIdPosts ],
            }
        })
    }
}