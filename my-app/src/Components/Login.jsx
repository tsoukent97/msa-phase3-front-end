import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
const google = window.google;

function Login() {

    const navigate = useNavigate();
    const [ user, setUser ] = useState({});
    
    function dogSubmit (e) {
        e.preventDefault()
        navigate('/Search')

    };

    function handleCallbackResponse(response) {
        setUser(jwt_decode(response.credential));
        document.getElementById("signInDiv").hidden = true;
    };

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    };

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "200583476302-o2kfrf01dg909e845v91lutsphhn345o.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );
        google.accounts.id.prompt();
    }, []);


    return (
            <motion.div 
                animate={{rotate: [0, 50, -20, 20, -10, 50, -30, 40, 0, 20, -25, 360], scale:1.5}} 
                transition={{duration: 5}}
                >
                    <div className="form-container">
                        <form>
                            <h4>Sign In</h4>
                            
                            <div id="signInDiv"></div>
                            { Object.keys(user).length !==0 && 
                                <button onClick={ (e) => handleSignOut(e) } id="signout-button">Sign Out</button>
                            }
                            {user &&
                                <div>
                                    <img id="user-photo" src={user.picture} alt=""></img>
                                    <h2 id="user-welcome">{user.name}</h2>
                                </div>
                            }
                            
                            <button 
                                type="submit" 
                                className="form-button"
                                onClick={dogSubmit}
                            >
                                Dog Search
                            </button>
                        </form>

                        <footer>
                            MSA Phase 3 | Front-end | tsoukent97@outlook.com | <a href="https://github.com/tsoukent97" target="blank">Github</a> 
                        </footer>
                    </div>
            </motion.div>
    )
  }

export default Login;