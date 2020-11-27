# _Currency Converter_

#### _A webpage to convert USD to other currencies, November 20, 2020_

#### By _**Zahnen Garner**_

## Description

_This webpage was created as my independent project for my sixth week at Epicodus. The webpage allows users to input a currency code to convert USD to as well as the amount of USD to convert. The webpage was created to apply concepts I learned this week which include making API calls and parsing JSON objects returned from said calls._

## Setup/Installation Requirements

### If you would like to run the webpage locally

* _Open your git-capable command line program (I recommend Terminal on Mac or Git Bash on PC)_
* _Ensure you are within the directory you'd like the file to be created in._
* _Enter the command "$ git clone https://github.com/Zahnen/currency-converter" in your command line_
* _Once cloned, use the "$ cd " command to navigate to the directory created in the previous step._
* _You must have node.js installed in order to run the webpage successfully. If you do not have node.js installed, find more information and download it [here](https://nodejs.org/en/download/)_
* _Once in the newly cloned directory, run "$ npm install" in your command line to install the necessary packages and dependencies._
* _This program uses an API provided by ExchangeRate-API and has been tested using a hidden key. In order to test on your local device, you'll need to generate your own API key [here](https://www.exchangerate-api.com/)_
* _Once you have your API key, replace the "${process.env.API_KEY}" within the url on Line 3 of exchange-service.js with your new key._
* _Alternatively, if you'd like to keep your key encrypted for publishing, skip the previous step and instead create a file called ".env" at the root level of your project directory. Input the code "API_KEY=" (minus the quotation marks) into this file and follow that line with your unique API key. As this project supports environmental variables, your API key will now be held in the "${process.env.API_KEY}" variable_
* _To open the webpage in your default browser, run "$ npm start"._

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you notice a bug or require support, please reach out to me via email. I can be reached at zahnen@gmail.com_

## Technologies Used

_This webpage required use of the following programs/languages/libraries to create:_
* _GitBash_
* _Visual Studio Code_
* _GitHub_
* _GitHub Pages_
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_
* _Node.js_
* _npm_
* _Jest_
* _For a full list of packages/dependencies, feel free to have a look in the file titled package.json_

### License

*Licensed under MIT*

*Vector icons provided via Icons8's library, which can be found [here](https://icons8.com/)*

*Currency Conversion API kindly provided by [Exchange-API](https://www.exchangerate-api.com/)*


Copyright (c) 2020 **_Zahnen Garner_**