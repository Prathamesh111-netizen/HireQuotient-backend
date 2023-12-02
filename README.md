# Hire Quotient Backend API

## Overview

Welcome to the documentation for the **Hire Quotient backend API**. This API empowers the Hire Quotient platform with seamless user authentication, registration, and profile management. It also provides functionalities for creating, updating, and deleting posts, along with commenting on posts.


## Getting Started

To use the Hire Quotient backend API, follow these steps:

1. **Create and Update `.env` File:**
   - Create a `.env` file in the project root.
   - Update the file with required configurations, including database connection details, secret keys, and other environment variables.

2. **Install Dependencies:**
   - Run `npm install` to install the necessary dependencies.

3. **Start the API:**
   - Run `npm start` to start the API locally.

## Docker Compose

To use Docker for deployment, follow these steps:

1. **Update Docker Compose File:**
   - Update the `docker-compose.yml` file with the required environment variables.

2. **Build and Start Containers:**
   - Run `docker-compose up --build` to build and start the Docker containers.

The API should now be accessible at the specified port or 5000.

## Key Features

### User Authentication and Registration

- **Login:**
  - Authenticate users and obtain access tokens.
  - Endpoint: `POST /users/login`

- **Registration:**
  - Register new users with unique credentials.
  - Endpoint: `POST /users`

### Profile Management

- **Get User Profile:**
  - Retrieve user profile data for authenticated users.
  - Endpoint: `GET /users/profile`

- **Update User Profile:**
  - Allow users to update their profile information.
  - Endpoint: `PUT /users/profile`

### Posts

- **Get All Posts:**
  - Fetch all posts created by users.
  - Endpoint: `GET /posts`

- **Create New Post:**
  - Enable users to share their thoughts by creating new posts.
  - Endpoint: `POST /posts`

- **Update Post:**
  - Allow users to edit and update their existing posts.
  - Endpoint: `PUT /posts/{id}`

- **Delete Post:**
  - Provide functionality to delete a user's post.
  - Endpoint: `DELETE /posts/{id}`

- **Get Public Posts:**
  - Retrieve a list of public posts.
  - Endpoint: `GET /posts/public`

### Comments

- **Get Comments for a Post:**
  - Fetch all comments associated with a specific post.
  - Endpoint: `GET /comments/{postid}`

- **Create Comment:**
  - Allow users to express their thoughts by adding comments to posts.
  - Endpoint: `POST /comments`


