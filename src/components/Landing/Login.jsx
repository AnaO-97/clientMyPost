function Login ( props ){
    const { styles, userData, handleChange, handleSubmit } = props;

    return(
        <div className = { styles.subContainer } >
            <h1> LOG IN </h1>

            <form onSubmit = { handleSubmit }>
                <input name = "email"
                       type = "text"
                       autoFocus
                       placeholder  = "E-mail..."
                       autoComplete = "off"
                       value        = { userData.email }
                       onChange     = { handleChange }
                />
                
                <input name = "plainPassword"
                       type = "password"
                       placeholder  = "Password..."
                       autoComplete = "off"
                       value        = { userData.plainPassword }
                       onChange     = { handleChange }
                />
                
                <button className = "btn btn-success" type = "submit">
                    LOG IN
                </button>
            </form>
        </div>
    )
}

export default Login;