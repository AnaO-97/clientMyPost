import styles from "./settings.module.css";

function Settings ( props ) {
    const { userData, 
            settings, 
            handleClickNo,
            handleChangeSettings, 
            handleSubmitSettings,
    } = props;

    return(
        <div>
            <form onSubmit  = { handleSubmitSettings }
                  className = { styles.formSettings }
            >
                <label htmlFor="fullName">Full name:</label>
                <input name         = "fullName"
                       type         = "text"
                    //    autoComplete = "on"
                       placeholder  = { userData.fullName }
                       className    = { styles.inputSetting }
                       value        = { settings.fullName }
                       onChange     = { handleChangeSettings }
                />

                <label htmlFor="age">Age:</label>
                <input name         = "age"
                       type         = "number"
                       autoComplete = "on"
                       placeholder  = { userData.age }
                       className    = { styles.inputSetting }
                       value        = { settings.age }
                       onChange     = { handleChangeSettings }
                />

                <label htmlFor="email">E-mail:</label>
                <input name         = "email"
                       type         = "text"
                       autoComplete = "on"
                       placeholder  = { userData.email }

                       className    = { styles.inputSetting }
                       value        = { settings.email }
                       onChange     = { handleChangeSettings }
                />

                <label htmlFor="plainPassword">Password:</label>
                <input name         = "plainPassword"
                       type         = "password"
                       autoComplete = "on"
                       placeholder  = { userData.plainPassword }
                       className    = { styles.inputSetting }
                       value        = { settings.plainPassword }
                       onChange     = { handleChangeSettings }
                />

                <label htmlFor="color">Color:</label>
                <input name         = "color"
                       type         = "color"
                       autoComplete = "on"
                    //    placeholder  = { userData.color }
                       className    = { styles.inputColor }
                       value        = { settings.color || userData.color }
                       onChange     = { handleChangeSettings }
                />                                                                
                <button className = { `material-symbols-outlined ${ styles.btnYes }` }>
                    done
                </button>
            </form>

            <button id        = "settings"
                    className = { styles.btnNo }
                    onClick   = { handleClickNo }
            >
                <span className = "material-symbols-outlined">
                    close
                </span>
            </button>

        </div>
    )
}

export default Settings;