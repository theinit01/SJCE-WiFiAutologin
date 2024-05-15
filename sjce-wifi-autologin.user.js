// ==UserScript==
// @name         Auto Login SJCE Wi-Fi
// @namespace    http://tampermonkey.net/
// @version      2024-05-15
// @description  Automatically logins when the SJCE wifi page is loaded
// @author       theinit01
// @match        http://10.24.1.1:8090/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    var username = "uu214429"; // Default username
    var password = "bhajyo28"; // Default password

    // Logging function
    function log(message) {
        console.log("[Auto Login SJCE Wi-Fi] " + message);
    }

    // Function to fill in login form and submit
    function login() {
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");

        if (usernameInput && passwordInput) {
            usernameInput.value = username;
            passwordInput.value = password;

            log("Filled in login form with default credentials.");

            // Submit the form
            var loginButton = document.getElementById("loginbutton");
            if (loginButton) {
                loginButton.click();
                log("Login button clicked.");
            } else {
                log("Login button not found.");
            }
        } else {
            log("Username or password input fields not found.");
        }
    }

    // Call login function when the page is loaded
    window.addEventListener('load', function() {
        log("Page loaded, attempting auto-login.");
        login();
    }, false);
})();
