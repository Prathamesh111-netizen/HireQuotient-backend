# Hire Quotient Backend API

## Overview

Welcome to the documentation for the **Hire Quotient backend API**. This API empowers the Hire Quotient platform with seamless user authentication, registration, and profile management. It also provides functionalities for creating, updating, and deleting posts, along with commenting on posts.

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

## How to Use

To interact with the API, make HTTP requests to the provided endpoints using the base URL `/api`. Ensure proper authentication by including the required tokens in the request headers.

For detailed information on request and response formats, refer to the API definitions in the documentation.

Feel free to explore and enhance the user experience on the Hire Quotient platform using these API features!
