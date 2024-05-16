# SJCE-WiFiAutologin

<p align="center">
<img src="https://github.com/theinit01/SJCE-WiFiAutologin/blob/main/thumbnail.png" alt="picture" width="500">
</p>

## Introduction

This repository contains a userscript designed to auto login the SJCE WiFi login page whenever opened. Follow the instructions below to get started.<br>
**NOTE**: For more enhanced experience, set your browser's default startup page to http://10.24.1.1:8090

## Installation

1. **Install Tampermonkey**:
   If you haven't already, you need to install the Tampermonkey browser extension. You can find it for various browsers:
   - <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank">Tampermonkey for Chrome</a>
   - <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/" target="_blank">Tampermonkey for Firefox</a>
   - <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd" target="_blank">Tampermonkey for Edge</a>
   - <a href="https://addons.opera.com/en-gb/extensions/details/tampermonkey-beta/" target="_blank">Tampermonkey for Opera/OperaGX</a>

2. **Install the Script**:
   [Click Here and Press Install](sjce-wifi-autologin.user.js?raw=True).

3. **Add your credentials in the installed script**:
   Go to tapermonkey, press dashboard select the script and update your credentials
   ```javascript
   var username = "your-username";
   var password = "your-password";
   ```
   NOTE: Your credentials are stored in your personal device only.

4. **Enable the Script**:
   Enable the script by clicking the switch next to the script name in the Tampermonkey Dashboard.

NOTE: For added functionality, set your browser's default startup page to http://10.24.1.1:8090
## Contribution

If you have any suggestions, bug reports, or want to contribute to this userscript, feel free to create issues or pull requests in this GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
