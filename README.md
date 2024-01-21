# Happy Cart - Amazon Clone 😀

## Overview
Happy Cart is a web application that replicates the functionality of Amazon, allowing users to browse products, add them to the shopping basket, and proceed to checkout. The project is built using React.js and Firebase for authentication and database functionalities.

## Project Structure
The project follows a standard React.js project structure. Components are organized into separate files within the src directory. Key files include:

`App.js`: The main component that defines the routes and renders other components based on the route.
`firebase.js`: Configures and initializes Firebase for authentication and Firestore database.
`reducer.js`: Defines the data layer logic and the reducer function for managing the state.
`StateProvider.js`: Sets up the context provider for the state management.


## Firebase Configuration
The firebase.js file contains the Firebase configuration, including API keys and authentication setup. It also exports the Firebase authentication (auth()) and Firestore database (db) instances for use in other components.

## Components

1. `App.js`
App.js is the main component that sets up the routes using React Router. It also initializes Firebase authentication and listens for changes in the user's authentication status.

2. `axios.js`
axios.js configures an instance of Axios for making HTTP requests to the cloud functions API.

3. `checkout.js`
checkout.js represents the checkout page, displaying the user's shopping basket and subtotal. It utilizes the Subtotal and CheckoutProduct components.

4. `checkoutProduct.js`
checkoutProduct.js is a reusable component that displays a single product in the checkout page, allowing the user to remove it from the basket.

5. `firebase.js`
firebase.js configures and exports the Firebase configuration, authentication, and Firestore database instances.

6. `header.js`
header.js contains the application header, including the logo, search bar, and user authentication features.

7. `home.js`
home.js represents the home page, displaying featured products organized into different rows.

8. `index.js`
index.js is the entry point of the application, rendering the App component within the StateProvider to manage the application state.

9. `login.js`
login.js provides the user authentication functionality, allowing users to sign in, register, and sign out.

10. `order.js`
order.js represents a single order, displaying order details and the products included. It is used on the Orders page.

11. `orders.js`
orders.js displays a list of orders for the authenticated user, retrieved from the Firestore database.

12. `payment.js`
payment.js handles the payment process, integrating with the Stripe API for secure payment transactions.

13. `product.js`
product.js is a reusable component representing a single product, displaying its details and allowing users to add it to the shopping basket.

14. `reducer.js`
reducer.js defines the data layer logic and the reducer function for managing the application state. It includes actions for adding items to the basket and removing them.

15. `serviceWorker.js`
serviceWorker.js registers a service worker for the application, enabling offline capabilities and faster loading on subsequent visits.

16. `StateProvider.js`
StateProvider.js sets up the context provider for the application's state management using the React context API.

17. `Subtotal.js`
Subtotal.js displays the subtotal of the user's shopping basket, including the item count and total price. It also contains a button to proceed to the checkout.


## Setting Up the Project Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Run npm install to install the project dependencies.
4. Run npm start to start the development server.
5. Open your browser and go to http://localhost:3000 to view the application.

## Deployment

Deployed using Vercel : ``` https://happy-cart-react-js.vercel.app/ ```

## Important Note
Ensure that you have set up the Firebase project and configured the necessary API keys in firebase.js for authentication and Firestore.
