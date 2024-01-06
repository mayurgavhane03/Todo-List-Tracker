# creating main app
    -  npx create-expo-app my app

# install expo router
    -npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# Chnage main in package.json
    - This will change the directory structure of the app 
    - To app/index.js
    {
  "main": "expo-router/entry"
    }

# change scheme in app.json
    {
  "scheme": "your-app-scheme"
    }

# create api folder
    - create package.json ==> npm init
    - add or install  dependecies 
        =>  yarn add body-parser cors express mongoose nodemon jsonwebtoken
            -create index.js
            -In script object to start directly through nodemon "start": "nodemon index.js",
    - create schemas for user and Todo
    -crate post and get request 


# create Sign in and login Page 
    - and use async storage from expo 
        - install the library 
        - npx expo install @react-native-async-storage/async-storage


# install react native modals
    - npm install react-native-modal


# instll moment for  date and time formats

# install react native calendar
-  npm i react-native-calendar


# install react-native-chart-kit
