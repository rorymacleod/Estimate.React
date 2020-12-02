import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function SignIn() {
    const history = useHistory();

    useEffect(() => {
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    console.log("Auth Result:", authResult);
                    console.log("Redirect URL:", redirectUrl);
                    return false;
                }
            },
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            tosUrl: () => history.push("/terms"),
            privacyPolicyUrl: () => history.push("/privacy")
        });
    });

    return (
        <div id="firebaseui-auth-container"></div>
    );
}