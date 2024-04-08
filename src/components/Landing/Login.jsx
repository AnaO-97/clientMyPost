function Login ( props ){
    const { styles, userData, handleChange, handleSubmit } = props;

    return(
        <div className = { styles.subContainer } >
            <h1> LOG IN </h1>

            <form onSubmit = { handleSubmit }>
                <div className = { styles.inputBox }>
                    <input name = "email"
                       autoFocus                       
                       required
                       type         = "email"
                       autoComplete = "off"
                       value        = { userData.email }
                       onChange     = { handleChange }
                    />
                    <label htmlFor = "email">E-mail</label>
                    <span className = "material-symbols-outlined">
                        mail    
                    </span>
                </div>
                <div className = { styles.inputBox }>
                    <input name = "plainPassword"
                       required
                       type         = "password"                       
                       autoComplete = "off"
                       value        = { userData.plainPassword }
                       onChange     = { handleChange }
                    />
                    <label htmlFor = "password">Password</label>
                    <span className = "material-symbols-outlined">
                        lock
                    </span>
                </div>  
                
                <button className = "btn btn-success" type = "submit">
                    LOG IN
                </button>
            </form>
        </div>
    )
}

export default Login;