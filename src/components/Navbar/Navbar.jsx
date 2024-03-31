import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearRedux }  from "../../redux/actions";
import styles from "./bar.module.css";

function Navbar ( props ) {
    const { userData } = props;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOutput = () => {
        dispatch(clearRedux());
        navigate("/landing");
    }

    const handleSettings = () => {
        navigate("/home/settings");
    }

    const handleCreatePost = () => {
        navigate("/home");
    }

    return(
        <div className = { styles.generalNavbar }
             style     = {{ backgroundColor : `${ userData.color }80` }}
        >
            <button className = "material-symbols-outlined" title = "Create Post"
                    onClick   = { handleCreatePost }
            >
                post_add
            </button>  

            <button className = "material-symbols-outlined" title = "Settings"
                    onClick   = { handleSettings }
            >
                settings
            </button>

            <button className = "material-symbols-outlined" title = "Output"
                    onClick   = { handleOutput }
            >
                output
            </button>
        </div>
    )
}

export default Navbar;