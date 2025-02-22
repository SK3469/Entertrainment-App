# Entertrainment-App
Entertainment App
The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.

Deployment
Frontend: :- https://capstone-frontend-entertrainment.vercel.app/
Backend: :- https://capstone-backend-entertainment-sk.vercel.app/
Important Links
API Documentation : https://capstone-backend-entertainment-sk.vercel.app/
Database Design: Google Docs Link
Features
User Authentication: Uses JWT for secure login and registration, ensuring data protection.
Media Exploration: Discover trending movies and TV shows with detailed views for each.
Bookmarks: Save favorite media to a personalized list for easy access.
Detailed Media Information: View cast, genres, ratings, and other essential details.
Prerequisites
Node.js (v14 or later)
npm (v6 or later)
MongoDB instance (local or remote)
TMDB API key for fetching media data
Getting Started For Backend
Backend Setup
Clone the Repository: Start by cloning the Entertainment App repository to your local machine.

git clone Repo
Navigate to the Backend Directory: Move into the backend directory of the project.

cd entertainment-web-app/backend
Install Dependencies: Install the necessary dependencies using npm.

npm install
Configure Environment Variables: Create a .env file based on the provided .env.example file. Provide your MongoDB URI and TMDB API key in the .env file.

MONGODB_URL= "Mongodb connection string our url "
TOKEN= "Secret token for authentication & cookies"
NODE_ENV="Production"
TMDB_KEY="TMDB api key "
FRONTEND_URL="Frontend url"
Start the Server: Run the backend server.

node index.js
Verify Backend Setup: Confirm that the backend server is running without any errors.

Backend Technologies
Node js
Express js
jsonwebtoken
bcrypt
MongoDB
Mongoose
dotenv
cors
cookie-parser
Backend Project Structure
Constant: Contains TMDB API endpoints.
Controllers: Handles API request logic.
Middleware: Manages authentication.
Models: Defines database schemas.
Routes: Manages API endpoints.
Utils: Includes helper functions for media fetching and cookie generation.
|-- src
    |-- constants 
        |-- media.constant.js
    |-- controllers
        |-- bookmark.controllers.js 
        |-- media.controllers.js 
        |-- mediaDetail.controllers.js 
        |-- mediaImage.controllers.js 
        |-- mediaSearch.controllers.js 
        |-- user.controller.js
    |-- middleware
        |-- auth.js 
    |-- models 
        |-- bookmark.models.js 
        |-- user.models.js 
    |-- routes 
        |-- bookmark.routes.js 
        |-- media.routes.js 
        |-- user.routes.js 
    |-- utils
        |-- media.utils.js 
        |-- user.utils.js 
    |-- app.js 
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- package-lock.json
Getting Started For Frontend
Access the Application: Open your web browser and navigate to the specified URL (default: http://localhost:5173) to access the Entertainment App.
Frontend Technologies
Vite
Npm
HTML
CSS
Tailwind CSS
React.js
React Query
Javascript
Context API
React hook form
Tailwind Loader Css
Frontend Project Structure
Assets: Contains dummy image .
Components: Reusable components code .
Context: State mangement accross applicaton for authenticatin & bookmark.
Pages: Five main pages, Home, Movie, Tv, Bookmark, Profile.
Utils: Contains baseUrl of api & function to fetch media
|-- src
    |-- assets 
    |-- components
        |-- AuthComponents 
            |-- Login.jsx 
            |-- Logout.jsx 
            |-- Register.jsx 
        |-- CssComponents
            |-- Loading.jsx
            |-- Toast.jsx
        |-- HomeMedia
            |-- MediaRecommend.jsx
            |-- MediaTrending.jsx
        |-- MediaComponents
            |-- Media.jsx
            |-- MediaBookmark.jsx
            |-- MediaBookmarked.jsx 
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaPlay.jsx
        |-- MediaDetails
            |-- Details.jsx
            |-- MediaCast.jsx
            |-- MediaGenre.jsx 
            |-- MediaHeading.jsx
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaLink.jsx
            |-- MediaRatings.jsx
            |-- MediaSynopsis.jsx
        |-- Error404.jsx
        |-- Header.jsx
        |-- MoreMedia.jsx
        |-- SearchBar.jsx
        |-- SearchResult.jsx
    |-- context
        |-- MyContext.js
        |-- MyState.js  
    |-- pages
        |-- Bookmarks.jsx 
        |-- Home.jsx 
        |-- Movie.jsx 
        |-- Profile.jsx 
        |-- Tv.jsx  
    |-- utils 
        |-- baseUrl.js 
        |-- fetchMultiMedia.js
    |-- App.jsx 
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
