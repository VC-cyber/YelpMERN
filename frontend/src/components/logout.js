import { GoogleLogout} from "react-google-login";

const clientID = "333416024560-o22qubk3q1ln6n0jf545gq619ag1lbkn.apps.googleusercontent.com";

function Logout() {
    const onSuccess = (res) => {
        console.log('Log out successful');
    }

    return(
        <div id = "signOutButton">
            <GoogleLogout
                clientId = {clientID}
                buttonText = {"Logout"}
                onLogoutSuccess = {onSuccess}
            />
        </div>
    )
}

export default Logout;