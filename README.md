# BlogApp-using-Node.js, Express, and MongoDB

This is a simple Blog application built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete Blog items. Additionally, users can comment on and like the Blog items.

## Features

- CRUD operations for Blog items
- Ability to comment on Blog items
- Ability to like Blog items

## Installation

1. Clone the repository
   git clone https://github.com/yourusername/Blogapp.git
2. Install dependencies
   npm install
3. Create a `.env` file in the root directory and add the following:
  env
  DATABASE_URL=mongodb://localhost:27017/Blogapp
  PORT=4000
4. Start the server
   npm start
  For development, you can use:
  npm run dev

## Usage

The application exposes several endpoints:

- `POST /api/v1/posts/create` - Create a new Blog item
- `GET /api/v1/posts` - Get all Blog items
- `POST /api/v1/comments/create` - Comment on a Blog item
- `POST /api/v1/likes/like` - Like a Blog item
- `POST /api/v1/likes/unlike` - Unlike a Blog item

## Models

The application uses three main models:

- `Post` - Represents a Blog item
- `Comment` - Represents a comment on a Blog item
- `Like` - Represents a like on a Blog item

## Controllers

There are controllers for handling the logic for posts, comments, and likes:

- `postController` - Handles creating and fetching posts
- `commentController` - Handles creating comments
- `likeController` - Handles liking and unliking posts

## Routes

The application's routes are defined in `routes/blog.js`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License.
   
