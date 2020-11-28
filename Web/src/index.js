import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.scss"

(function() {
    configureFirebase();
    // configureFirebaseAuth();
    ReactDOM.render(<App />, document.getElementById("root"));
    
    function configureFirebase() {
        var firebaseConfig = {
            apiKey: "AIzaSyDX06oH0phUhpLhSU6MSiBUyiBEndjMYlk",
            authDomain: "rorymacleod-estimate.firebaseapp.com",
            databaseURL: "https://rorymacleod-estimate.firebaseio.com",
            projectId: "rorymacleod-estimate",
            storageBucket: "rorymacleod-estimate.appspot.com",
            messagingSenderId: "32926212817",
            appId: "1:32926212817:web:f6cee504255fbb3cf35bf0",
            measurementId: "G-0645ZT4033"
        };

        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }

    function configureFirebaseAuth() {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        ui.start("#firebaseui-auth-container", {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown: function() {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInFlow: "popup",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            tosUrl: "https://estimate.rorymacleod.com/terms",
            privacyPolicyUrl: "https://estimate.rorymacleod.com/privacy"
          });
    }
})();