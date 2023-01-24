import { useAuth0 } from "@auth0/auth0-react"
import { AppLogo } from "../Logos/AppLogo"
import './Login.css'

export const Login = function () {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0()

    console.log(isAuthenticated, user);

    return (
        <div className="login-button-container">
            <button onClick={() => loginWithRedirect()} className='login-button'>
                <AppLogo style={{height : "100px", width: "150px"}}/>
                <h1 className="login-text">Login</h1>
            </button>
        </div>
    )
}