This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Weather-app

My one of the first projects in React. Weather application that provides information about the current weather of the city.

## Installation and Setup
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  



## Repo structure
Sometimes it’s helpful to know what all these different files are for…

```
/
├─ public/
│  ├─ index.html  
├─ src/   
│  ├─ compontents/
│  │  ├─ mainPanel.js        # that renders all components 
│  │  ├─ toggleBtn.js        # that renders button which is changing page theme (dark/light)
│  │  ├─ weatherIcon.js      # that renders weather icons in WeatherPanel.js
│  │  ├─ weatherInput.js     # that renders input for name of the city
│  │  ├─ weatherPanel.js     # that renders panel with weather information
│  ├─ sass/    
│  │  ├─ header.scss
│  │  ├─ mainPanel.scss
│  │  ├─ toggleBtn.scss
│  │  ├─ weatherInput.scss
│  │  ├─ weatherPanel.scss
│  ├─ App.js
│  ├─ index.js
│  ├─ index.scss
├─ .gitignore 
├─ .package-lock.json 
├─ .package.json 
└─ README.md                # This file
```
