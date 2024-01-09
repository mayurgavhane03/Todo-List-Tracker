# My Awesome App

## Description

This application is built using Expo and React Native, providing various functionalities including user authentication, API integration, and UI components for scheduling and data visualization.

## Installation

### Setting Up the Main App

1. **Create Expo App:**
    ```bash
    npx create-expo-app my-app
    ```

2. **Install Dependencies:**
    ```bash
    npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
    ```

3. **Modify `package.json` Main:**
    ```json
    {
      "main": "app/index.js"
    }
    ```

4. **Adjust `app.json` Scheme:**
    ```json
    {
      "scheme": "your-app-scheme"
    }
    ```

### API Setup

1. **Create API Folder:**
    - Initialize `package.json`: `npm init`
    - Install Dependencies: `yarn add body-parser cors express mongoose nodemon jsonwebtoken`
    - Implement API functionalities in `index.js`

### Sign In and Login Pages

1. **Utilize Async Storage:**
    - Install Library:
        ```bash
        npx expo install @react-native-async-storage/async-storage
        ```

### Additional Functionality

1. **React Native Modals:**
    ```bash
    npm install react-native-modal
    ```

2. **Moment for Date & Time:**
    ```bash
    npm install moment
    ```

3. **React Native Calendar:**
    ```bash
    npm install react-native-calendar
    ```

4. **React Native Chart Kit:**
    ```bash
    npm install react-native-chart-kit
    ```

## Usage

1. **Run the App:**
    ```bash
    npm start
    ```
    This will start the development server for your app.

2. **API Usage:**
    - Start your API server:
        ```bash
        npm start
        ```
    - Access API endpoints for user authentication and data retrieval.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to enhance the application.

## License

This project is Made With ❤️ by Mayur Gavhane