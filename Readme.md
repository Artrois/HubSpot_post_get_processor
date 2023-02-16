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

## Fault messages
-Passwortfeld existiert nicht:	<br> <p style="color:#FF0000">Fehler in der HubSpot Form, bitte melden Sie den Fehler an MediaInterface GmbH: info@mediainterface.de </p>
-Die die Länge Felder Vorname, Nachname, Company < 2 oder die DSGVO CheckBox nicht ausgewählt:	<br> <p style="color:#FF0000">Fehler: alle Pflichtfelder müssen ausgefüllt sein. Bitte vervollständigen Sie all Felder und versuchen es erneut. </p>
-MediaInterface Server meldet einen Fehler:	<br> <p style="color:#FF0000">Etwas ist schiefgegangen. Waren Sie schon mal bei uns registriert? Falls nicht, laden Sie bitte die Seite erneut (STR+R) und versuchen Sie es noch einmal! <br>Fehlermedlung: '+ data.errors[0].message + '</p>
-Falsch formatierte eMail Adresse:	<br> <p style="color:#FF0000">Die angegebene eMail Adresse hat falsches Format. Bitte korrigieren Sie Ihre eMail Adresse. </p>

## Message formats
Messaging from/to server:
```sh
Endpunkt:  /users/register/trial?api_key=[API_KEY]
Method: POST
Request Content-Type: application/json
Request-Body:
{
    "email": "string"    
}
 
Response Content-Type: application/json
Response-Body:
{
  "succeeded": true,
  "result": {
    "email": "string",
    "password": "string"
  },
  "errors": [
    {
      "id": 0,
      "message": "string"
    }
  ]
}
```
