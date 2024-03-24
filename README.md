
###Streamspectra Server
Streamspectra Server is a backend application designed to manage user accounts, watchlists, and liked items for a streaming platform. It provides RESTful APIs for user registration, authentication, managing watchlists, and liking/disliking content.

##Table of Contents
Features
Installation
Usage
API Endpoints
Technologies Used
Dependencies
Author
Contact


#Features
User registration with encrypted password storage.
User authentication using JSON Web Tokens (JWT).
Adding/removing movies or TV shows to/from watchlists.
Adding/removing movies or TV shows to/from liked items list.
Retrieving user watchlists and liked items.


#Installation
Clone the repository:git clone https://github.com/nikhilpatterwal123/streamspectra-server.git
Navigate to the project directory: cd streamspectra-server
Install dependencies: npm install


#Set up environment variables:
Create a .env file in the root directory and define the following variables:PORT=4000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>


#Start the server: npm start

#Usage
Once the server is running, you can send HTTP requests to the provided API endpoints to register users, authenticate users, manage watchlists, and interact with liked items.


#User Routes:
POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate user and generate JWT token.

#Watchlist Routes:
POST /api/watchlist/add: Add movie or TV show to watchlist.
GET /api/watchlist: Get user's watchlist.
POST /api/watchlist/remove: Remove movie or TV show from watchlist.

#Likes Routes:
POST /api/likes/add: Add movie or TV show to liked items.
GET /api/likes: Get user's liked items list.
POST /api/likes/remove: Remove movie or TV show from liked items.


#Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)
bcryptjs
Dependencies
express
cors
dotenv
express-async-handler
jsonwebtoken
mongoose
bcryptjs
nodemon (dev)

#Author : Nikhil Pattarwal
#Contact
For any inquiries or feedback, you can reach out to me at nikhilpatterwal123@gmail.com.
