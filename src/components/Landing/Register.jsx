function Register ( props ){
    const { styles, userData, handleChange, handleSubmit } = props;

    return(
        <div className = { styles.subContainer }>
            <h1> REGISTER </h1>

            <form onSubmit = { handleSubmit }>
                <div className = { styles.inputBox }>
                    <input name = "fullName"
                        autoFocus
                        type         = "text"                        
                        autoComplete = "off"
                        value        = { userData.fullName }
                        onChange     = { handleChange }
                        required
                    />
                    <label htmlFor = "fullName">Full name</label>
                    <span className = "material-symbols-outlined">
                        person
                    </span>
                </div>
                
                <div className = { styles.inputBox }>
                    <input name = "age"
                        type         = "text"                        
                        autoComplete = "off"
                        value        = { userData.age }
                        onChange     = { handleChange }
                        required
                    />
                    <label htmlFor = "age">Age</label>
                    <span className = "material-symbols-outlined">
                        date_range
                    </span>                    
                </div>
                
                <div className = { styles.inputBox }>
                    <input name = "email"
                        type         = "text"                                                
                        autoComplete = "off"
                        value        = { userData.email }
                        onChange     = { handleChange }
                        required
                    />
                    <label htmlFor = "email">E-mail</label>
                    <span className="material-symbols-outlined">
                        mail    
                    </span>
                </div>
                
                <div className = { styles.inputBox }>
                    <input name = "plainPassword"
                        type         = "text"                        
                        autoComplete = "off"
                        value        = { userData.plainPassword }
                        onChange     = { handleChange }
                        required
                    />
                    <label htmlFor = "plainPassword">Password</label>
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                </div>
                
                <div className = { styles.inputBox }>
                    <input name = "color"
                        type         = "color"
                        value        = { userData.color || "#808080" }
                        onChange     = { handleChange }
                    /> 
                    <label htmlFor = "color">Color theme</label>
                    <span className = "material-symbols-outlined">
                        palette
                    </span>
                </div>

                <button className = "btn btn-success" type = "submit">
                    REGISTER
                </button>
            </form>
        </div>
    )
}

export default Register;