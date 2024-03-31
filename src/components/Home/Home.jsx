import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch }  from "react-redux";
import { modifyMyFavorite  } from "../../redux/actionsFavorite";
import { modifyInformationUser } from "../../redux/actionsUser";
import { getAllPosts, createMyPost, updatePost, deletePost } from "../../redux/actionsPosts";
import styles  from "./home.module.css";
import AllPost from "./AllPosts";
import Settings from "./Settings";
import Searchbar  from "../Navbar/Searchbar";
import CreateModifyPost from "./CreateModifyPost";

function Home ( props ) {
    const { userData, pathname } = props;
    
    const navigate  = useNavigate();
    const dispatch  = useDispatch();    
    const token     = useSelector(( state )=> state.JWT_KEY);
    const favorites = useSelector(( state )=> state.myFavorites);
    const dataPosts = useSelector(( state )=> state.filterPosts.data);
    
    const [ currentDate, ]          = useState(new Date());
    
    const [ settings, setSettings ] = useState({
        color    : undefined,
        fullName : undefined,
        age      : undefined,
        email    : undefined,
        password : undefined,
    });

    const [ newPost, setNewPost ] = useState({
        title   : "",
        content : "",
    });

    const [ postModify, setPostModify ] = useState({ 
        id      : "" ,
        title   : undefined,
        content : undefined,
        likes   : undefined,
    })

    const iconChangingSection = () => {
        if( pathname === "/home")
            return "post_add"
        if( pathname === "/home/settings" )
            return "settings"
        if( pathname === "/home/modifyPost" )
            return "edit"
    }

    const titleChangingSection = () => {
        if( pathname === "/home")
            return "New Post"
        if( pathname === "/home/settings" )
            return "Settings"
        if( pathname === "/home/modifyPost" )
            return "Edit Post"
    }

    const handleClickNo = ( event ) => {       
        const { id } = event.target.parentElement;

        if( id === "createModifyPost" ){ 
            if( pathname === "/home/modifyPost" )
                navigate("/home");

            setNewPost({
                title   : "",
                content : "",
            });
        }
        
        if( id === "settings" ){
            setSettings({
                color    : undefined,
                fullName : undefined,
                age      : undefined,
                email    : undefined,
                password : undefined,
            });
            navigate("/home");
        }
    }

    const handleChangeSettings = ( event ) => {
        const { name, value } = event.target;

        setSettings({
            ...settings,
            [ name ] : value,
        })
    }

    const handleChangeCreateModifyPost = ( event ) => {
        const { name, value } = event.target;

        if( pathname === "/home" ){
            setNewPost({
                ...newPost,
                [ name ] : value,
            })     
        }
        
        if( pathname === "/home/modifyPost" ){
            setPostModify({
                ...postModify,
                [ name ] : value,
            }) 
        }
    }

    const handleSubmitCreateModifyPost =  ( event ) => {
        event.preventDefault();
        
        if( pathname === "/home" ){
            dispatch( createMyPost( newPost, token ) );

            setNewPost({
                title   : "",
                content : ""
            })
        }
        
        if( pathname === "/home/modifyPost" ){
            let modifyClean = {};

            for (const attribute in postModify) {
                if( postModify[ attribute ] !== undefined )
                    modifyClean[ attribute ] = postModify[ attribute ]
            }

            dispatch( updatePost( token, modifyClean ) );

            setPostModify({
                id      : "" ,
                title   : undefined,
                content : undefined,
                likes   : undefined,
            })

            navigate("/home");
        }
    }

    const handleSubmitSettings = ( event ) => {
        event.preventDefault();

        let settingsClean = {};

        for (const attribute in settings) {
            if( settings[ attribute ] !== undefined )
                settingsClean[ attribute ] = settings[ attribute ]
        }

        dispatch( modifyInformationUser( settingsClean, token ) )

        setSettings({
            color    : undefined,
            fullName : undefined,
            age      : undefined,
            email    : undefined,
            password : undefined,
        })

        navigate("/home");
    }

    const handleDeletePost = ( event ) => {
        const { id } = event.target;

        dispatch( deletePost( token, id ) );
    }

    const handleModifyPost = ( event ) => {
        const { id } = event.target;
        const [ postModify ] = dataPosts.filter((post)=>post.id===id);

        navigate("/home/modifyPost");

        setPostModify({ 
            id      : postModify.id,
            title   : postModify.title,
            content : postModify.content,
        })
    }

    const handleFavorite = ( event ) => {
        const { id } = event.target;

        if (favorites.idPosts.includes( id ))
         dispatch( modifyMyFavorite( "REMOVE_FAVORITE", id, token) );
        if (!favorites.idPosts.includes( id ))
         dispatch( modifyMyFavorite( "ADD_FAVORITE", id, token) );
    }

    useEffect(()=>{
        dispatch( getAllPosts( token ) )
    }, [ ])
   
    return(
        <div className = { styles.homeGeneral }>
            <div className = { styles.homeSubContainer }>
                <span style = {{ textShadow : `3px 2px 5px ${ userData.color }` }}>
                    My post
                    <img src = { process.env.REACT_APP_IMG_LOGO }/>
                </span>

                <Searchbar userData = { userData }/>

                <AllPost   userData    = { userData }
                           allPosts    = { dataPosts }
                           favorites   = { favorites }
                           handleFavorite   = { handleFavorite }
                           handleModifyPost = { handleModifyPost }
                           handleDeletePost = { handleDeletePost }
                />
            </div>

            <div className = { styles.changingSection}
                 style     = {{ backgroundColor : `${ userData.color }80` }}
            >
                <div className = { styles.headerContainer }>
                    <span className = "material-symbols-outlined">
                        { iconChangingSection() }
                    </span>
                    <span style = {{ textShadow : `3px 2px 5px ${ userData.color }` }}> 
                        { titleChangingSection() } 
                    </span>
                </div>
                {
                    pathname === "/home/settings"
                    ? <Settings userData = { userData }  
                                settings = { settings }
                                handleClickNo        = { handleClickNo }
                                handleChangeSettings = { handleChangeSettings }
                                handleSubmitSettings = { handleSubmitSettings }
    
                    />
                    : <CreateModifyPost newPost     = { newPost }
                                        pathname    = { pathname }
                                        currentDate = { currentDate }
                                        postModify  = { postModify }
                                        handleClickNo          = { handleClickNo }
                                        handleChangeCreateModifyPost = { handleChangeCreateModifyPost }
                                        handleSubmitCreateModifyPost = { handleSubmitCreateModifyPost }
                    />
                }
                <h6 style = {{ backgroundColor : `${ userData.color }` }}> 
                    { userData.fullName } ---- { userData.age } years 
                </h6>
            </div>
        </div>
    )
}

export default Home;