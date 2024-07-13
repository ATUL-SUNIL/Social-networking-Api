
---

# Social Networking API

This API documentation provides details for the Social Networking platform, allowing users to sign up, sign in, manage posts, comments, and likes.

## Table of Contents

1. [Introduction](#introduction)
2. [API Documentation](#api-documentation)
   - [Users](#users)
     - [Sign Up](#sign-up)
     - [Sign In](#sign-in)
   - [Posts](#posts)
     - [Get All Posts](#get-all-posts)
     - [Get Post by ID](#get-post-by-id)
     - [Create New Post](#create-new-post)
     - [Update Post](#update-post)
     - [Delete Post](#delete-post)
   - [Comments](#comments)
     - [Get Comments by Post ID](#get-comments-by-post-id)
     - [Create New Comment](#create-new-comment)
     - [Update Comment](#update-comment)
     - [Delete Comment](#delete-comment)
   - [Likes](#likes)
     - [Get Likes by Post ID](#get-likes-by-post-id)
     - [Toggle Like](#toggle-like)
3. [Definitions](#definitions)


## Introduction

This API facilitates interactions for a social networking platform, providing endpoints for user management, post creation and management, comment functionalities, and likes.

## API Documentation

### Users

#### Sign Up

- **POST** `/api/users/signup`
  - Creates a new user account.
  - **Parameters:**
    - `name` (string, required): User's full name.
    - `email` (string, required): User's email address.
    - `password` (string, required): User's password.
  - **Responses:**
    - `201`: User signed up successfully.

#### Sign In

- **POST** `/api/users/signin`
  - Authenticates a user and generates a JWT token.
  - **Parameters:**
    - `email` (string, required): User's email address.
    - `password` (string, required): User's password.
  - **Responses:**
    - `200`: User signed in successfully, returns a JWT token.
    - `400`: Incorrect credentials.

### Posts

#### Get All Posts

- **GET** `/api/posts/all`
  - Retrieves all posts with optional pagination.
  - **Parameters:**
    - `page` (integer): Page number.
    - `limit` (integer): Number of posts per page.
  - **Responses:**
    - `200`: Array of posts.

#### Get Post by ID

- **GET** `/api/posts/{postId}`
  - Retrieves a specific post by its ID.
  - **Parameters:**
    - `postId` (integer, path, required): ID of the post to retrieve.
  - **Responses:**
    - `200`: Post object.

#### Create New Post

- **POST** `/api/posts`
  - Creates a new post with an image.
  - **Parameters:**
    - `caption` (string, body, required): Caption for the post.
    - `imageUrl` (file, formData, required): Image file to upload.
  - **Responses:**
    - `201`: Post created successfully.

#### Update Post

- **PUT** `/api/posts/{id}`
  - Updates a post by its ID.
  - **Parameters:**
    - `id` (integer, path, required): ID of the post to update.
    - `caption` (string, body): New caption for the post.
    - `imageUrl` (string, body): New image URL for the post.
  - **Responses:**
    - `200`: Post updated successfully.
    - `400`: Error updating post.

#### Delete Post

- **DELETE** `/api/posts/{id}`
  - Deletes a post by its ID.
  - **Parameters:**
    - `id` (integer, path, required): ID of the post to delete.
  - **Responses:**
    - `200`: Post deleted successfully.
    - `400`: Error deleting post.

### Comments

#### Get Comments by Post ID

- **GET** `/api/comments/{postId}`
  - Retrieves all comments for a specific post.
  - **Parameters:**
    - `postId` (integer, path, required): ID of the post to retrieve comments for.
  - **Responses:**
    - `200`: Array of comments.

#### Create New Comment

- **POST** `/api/comments/{postId}`
  - Creates a new comment for a specific post.
  - **Parameters:**
    - `postId` (integer, path, required): ID of the post to comment on.
    - `content` (string, body, required): Content of the comment.
  - **Responses:**
    - `201`: Comment created successfully.

#### Update Comment

- **PUT** `/api/comments/{commentId}`
  - Updates a comment by its ID.
  - **Parameters:**
    - `commentId` (integer, path, required): ID of the comment to update.
    - `content` (string, query, required): New content for the comment.
  - **Responses:**
    - `200`: Comment updated successfully.
    - `400`: Error updating comment.

#### Delete Comment

- **DELETE** `/api/comments/{commentId}`
  - Deletes a comment by its ID.
  - **Parameters:**
    - `commentId` (integer, path, required): ID of the comment to delete.
  - **Responses:**
    - `200`: Comment deleted successfully.
    - `400`: Error deleting comment.

### Likes

#### Get Likes by Post ID

- **GET** `/api/likes/{postId}`
  - Retrieves all likes for a specific post.
  - **Parameters:**
    - `postId` (integer, path, required): ID of the post to retrieve likes for.
  - **Responses:**
    - `200`: Array of likes.

#### Toggle Like

- **PUT** `/api/likes/{postId}`
  - Toggles like/unlike for a specific post by its ID.
  - **Parameters:**
    - `postId` (integer, path, required): ID of the post to like/unlike.
  - **Responses:**
    - `200`: Like toggled successfully.

## Definitions

- **User**: Object representing a user with properties `name`, `email`, and `password`.
- **Post**: Object representing a post with properties `caption` and `imageUrl`.
- **Comment**: Object representing a comment with property `content`.
- **Like**: Object representing a like with properties `userId` and `postId`.




