import {GoogleLogin} from 'react-google-login';

const clientID = "333416024560-o22qubk3q1ln6n0jf545gq619ag1lbkn.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success! Current user:', res.profileObj);
    }
    const onFailure = (res) => {
        console.log('Login Failed:', res);
    }
    return(
        <div id = "signInButton">
            <GoogleLogin
                clientId = {clientID}
                buttonText = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login;