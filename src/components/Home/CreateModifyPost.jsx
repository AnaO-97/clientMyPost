import styles  from "./createModifyPost.module.css";

function CreateModifyPost ( props ) {
    const { newPost, 
            pathname,
            postModify,
            currentDate,
            handleClickNo, 
            handleChangeCreateModifyPost, 
            handleSubmitCreateModifyPost 
    } = props;

    return(
        <>
        <form onSubmit  = { handleSubmitCreateModifyPost }
              className = { styles.formCreatePost }
        >
            <input name      = "createdAt"
                   type      = "text"
                   disabled
                   className = { styles.createdAt }
                   value     = { currentDate.toLocaleString().split(",")[0] }
            />
            
            <input name         = "title"
                   type         = "text"
                   placeholder  = { pathname === "/home" ? "Post title ..." :  postModify.title }
                   autoComplete = "off"
                   className    = { styles.title }
                   value        = { pathname === "/home" ? newPost.title :  postModify.title }
                   onChange     = { handleChangeCreateModifyPost }
                   //    value        = { newPost.title }
            />
            
            <textarea name        = "content" 
                      rows        = "10" 
                      cols        = "45"
                      placeholder = { pathname === "/home" ? "Write something you want to share" :  postModify.content }
                      className   = { styles.content }
                      value       = { pathname === "/home" ? newPost.content :  postModify.content }
                      onChange    = { handleChangeCreateModifyPost }
                      //   value       = { newPost.content }
                    //   onChange    = { handleChangeCreatePost }
            />

            <div className = { styles.submitContainer }>
                <button type      = "submit"
                        className = { styles.btnYes }
                >
                    <span className = "material-symbols-outlined">
                        done
                    </span>
                </button>
            </div>            
        </form>

        <button id        = "createModifyPost"
                className = { styles.btnNo }
                onClick   = { handleClickNo }
        >
            <span className = "material-symbols-outlined">
                close
            </span>
        </button>
        </>
    )
}

export default CreateModifyPost;