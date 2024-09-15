 URL Shortener
A URL shortener built with Node.js, Express.js, MongoDB, and EJS templating. This application allows users to shorten URLs and manage them. The shortened URLs redirect to the original URLs, and the application tracks the number of times each shortened URL is clicked.
Features
- User Authentication: Sign up and log in to access the URL shortening service.
- URL Shortening: Generate short URLs for any given long URL.
- Click Tracking: Keep track of how many times a shortened URL has been clicked.
- Stateless Authentication:Uses JWT tokens to manage user sessions.
- Responsive UI: Simple user interface built with EJS templating.
  Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)
Technologies Used
- Node.js:Backend runtime environment
- Express.js: Web framework for building the server
- MongoDB: NoSQL database for storing URLs and user data
- Mongoose: ODM (Object Data Modeling) for MongoDB
- JWT (JsonWebToken): For authentication
- EJS: Templating engine for rendering dynamic HTML
-short-unique-id: To generate unique short URLs
- cookie-parser: For handling cookies
Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
2. Navigate to the project directory:
   ```bash
   cd url-shortener
3. Install dependencies:
   ```bash
   npm install
4. Set up your environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```bash
     JWT_SECRET=your_jwt_secret_key
     MONGO_URI=mongodb://127.0.0.1:27017/urlDB
5. Run the server:
   ```bash
   npm start
6. Open the application in your browser at `http://localhost:1000`.
Usage
1. Sign Up / Log In: Create an account or log in using your credentials.
2. Shorten URLs: Once logged in, you can input a long URL, and the app will generate a short URL for it.
3. Access URLs: Visit the shortened URL to be redirected to the original one. The app will also track the number of clicks on each short URL.
Project Structure
```bash
├── controllers
│   ├── auth.js               # Authentication logic
│   ├── route.function.js      # URL-related functions (getID, redirectURL)
│   └── user.functions.js      # User signup logic
├── middleware
│   └── restrictToLoggedInUsers.js # Middleware to restrict access to logged-in users
├── models
│   ├── schema.model.js        # URL schema for MongoDB
│   └── user.model.js          # User schema for MongoDB
├── routes
│   ├── staticRoutes.js        # Static pages route
│   ├── url.routes.js          # URL routes
│   └── user.routes.js         # User-related routes (signup, login)
├── services
│   └── service.js             # JWT handling logic (setToken, getToken)
├── views
│   ├── home.ejs               # Home page with shortened URLs
│   ├── login.ejs              # Login page
│   └── signup.ejs             # Signup page
├── public                     # Static assets (CSS, JS, images)
├── app.js                     # Main entry point of the app
├── database
│   └── db.connection.js       # MongoDB connection logic
└── package.json               # Project dependencies and scripts
API Endpoints
User Routes
- `GET /user`: Renders the sign-up page.
- `POST /user/post`: Handles user registration.
- `GET /user/login`: Renders the login page.
- `POST /user/auth`: Handles user login and authentication.
URL Routes
- `POST /url/post`: Shortens a new URL and stores it in the database.
- `GET /url/:shortID`: Redirects to the original URL based on the short ID.
Static Routes
- `GET /`: Displays the home page with all shortened URLs for logged-in users.
