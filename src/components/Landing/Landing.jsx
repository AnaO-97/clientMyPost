import styles from "./Landing.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../redux/actionsUser";
import { Login, Register } from "../index";

function Landing () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isUser = useSelector(( state )=> state.userData)

    const [typeSession, setTypeSession] = useState("login");
    const [userData, setUserData]       = useState({
        fullName : "",
        age      : 0,
        email    : "",
        color    : "#808080",
        plainPassword: "",
    });
    
    const handleSubmitRegister = (event) => {
        event.preventDefault(); 

        dispatch(registerUser(userData));
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault(); 

        dispatch(loginUser(userData));
    }

    const handleChange  = ( event ) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [ name ] : value,
        })
    }

    const handleSession = ( event ) => {
        setTypeSession(event.target.name)
    }

    useEffect(()=>{
        if( isUser.fullName ){
            setUserData({
                fullName : "",
                age      : 0,
                email    : "",
                plainPassword: "",            
            })
            navigate("/home");
        }
    }, [ isUser ])

    return(
        <div className = { styles.generalContainer } >
            <img src = { process.env.REACT_APP_IMG_LOGO }/>
            {
                typeSession === "login"
                ? <Login    styles        = { styles } 
                            handleChange  = { handleChange } 
                            userData      = { userData } 
                            handleSubmit  = { handleSubmitLogin } 
                />
                : <Register styles        = { styles } 
                            handleChange  = { handleChange } 
                            userData      = { userData } 
                            handleSubmit  = { handleSubmitRegister } 
                />
            }

            {
                typeSession === "login"
                ?   <button className = { styles.otherOption } 
                            name      = "register" 
                            onClick   = { handleSession }>
                        REGISTER
                    </button> 
                :   <button className = { styles.otherOption } 
                            name      = "login"    
                            onClick   = { handleSession }>
                        LOG IN
                    </button>
            }
        </div>
    )
}

export default Landing;