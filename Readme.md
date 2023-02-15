# HubSpot pre-submit jscript
Jscript that is injected to common HubSpot submit form. The injected code processes the form input fields, makes a POST/fetch to a remote host to retrieve unique ID, injects the ID into the form and submits the form

## Project setup
Open your form in HubSpot, paste the code into custom header.

## Usage
To test the backend for processing the POST query run:
```sh
yarn add nodemon -D
yarn run start
```

You can also use codesandbox.io for the backend and jsfiddle to test the form.
