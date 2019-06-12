## GITHUB ISSUE TRACKER

Application to track all open issues sorted by Date of creation for any Github Repository, given its URL.

Input: 

User can input a link to any GitHub repository (URL: `https://github.com/[username]/[Repository name]`)

Output :

Application UI displays a table with the following information-

- Total number of open issues.
- Number of open issues that were opened in the last 24 hours.
- Number of open issues that were opened more than 24 hours ago but less than 7 days ago.
- Number of open issues that were opened more than 7 days ago.

### DEVELOPMENT STACK

- HTML/CSS for DOM and Styling
- ReactJS for User Interface
- Material-UI https://material-ui.com/
- NodeJS Express framework for server side
- Adobe XD for User Interface mock-up and wireframing

### BACKEND ALGORITHM USED

To make faster and efficient Async requests, in case of Repositories with large no of issue counts and Pull requests- instead of iterating over all pull requests endpoints, here the link in the header of response is used and evaluated. The link header provide access to the next and last pages. Using this approach a more efficient and Constant time algorithm can be implemented.
 
See `InputComp.js` for full implementation details.

### FUTURE IMPROVEMENTS

- Implement Behaviour driven development and test the components for making the App more robust
- Usage of Hooks instead of Class based React components
- Custom styling for the individual components
- Making the User Interface more interactive for the user

The Application is deployed on Heroku platform. Open [https://githubissue-tracker.herokuapp.com](https://githubissue-tracker.herokuapp.com) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
