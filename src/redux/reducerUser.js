import * as ACTION from "./actionsTypes";

export default function reducerUser ( state, type, payload ) {
    if ( type === ACTION.NEW_USER || type === ACTION.LOGIN_USER){
        return({
            ...state,
            JWT_KEY : payload.token,
            userData: payload.userData,
        })
    }

    if ( type === ACTION.MODIFY_USER){
        const { userChanged, allPosts } = payload;

        let allPostsChanged = [];

        allPosts.forEach((postChanged)=>{
            state.filterPosts.data.forEach(( postBefore ) => {
                if (postChanged.id === postBefore.id)
                    allPostsChanged.push( postChanged );
            })
        })

        return({
            ...state,
            userData : userChanged,
            filterPosts : {
                ...state.filterPosts,
                data : [ ...allPostsChanged ],
            },
            allPosts    : [ ...allPosts ]
        })
    }
};