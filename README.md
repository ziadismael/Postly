# Postly
![Express.Js](https://img.shields.io/badge/Express-v4.16-blue)
![Node.Js](https://img.shields.io/badge/Node.js-v22.17-green)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.19.0-mint)


Postly is a simple social blogging backend web application where users can create, share, and engage with posts in a community-driven environment.

This project is a part of tasks from indlolike internship challenges, focusing on real-world features such as user authentication and blog post management.

## ✨ Features
- 🔐 User Authentication – Secure sign-up, login, and JWT-based session management.
- 📝 Create & Manage Posts – Write blogs or short posts with ease.
- ⚡ RESTful API – Built for scalability and clean integration.

## 🛠️ Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Auth: JWT-based authentication, bcrypt for hashing passwords

## 🚀 Goals
Postly is designed as a hands-on project to practice building backend applications, for indolike internship program, combining authentication, CRUD operations, and a social blogging experience.

## 🔗 API Endpoints

| HTTP Method | Endpoint           | Description                                   | Protected | Route           |
| :---------- | :----------------- | :-------------------------------------------  | :-------- | :-------------  |
| `POST`      | `/api/auth/signup` | Registers a new user.                         | No        |  Authentication |
| `POST`      | `/api/auth/login`  | Logs in an existing user and returns a token. | No        |  Authentication |
| `POST`      | `/api/auth/logout` | Logs out the currently authenticated user.    | No        |  Authentication |
| `POST`      | `/api/posts`       | Creates a new post.                           | Yes       | Posts           |
| `GET`       | `/api/posts`       | Retrieves a list of all posts.                | No        | Posts           |
| `GET`       | `/api/posts/:id`   | Retrieves a single post by its ID.            | No        | Posts           |
| `PUT`       | `/api/posts/:id`   | Updates an existing post by its ID.           | Yes       | Posts           |
| `DELETE`    | `/api/posts/:id`   | Deletes a post by its ID.                     | Yes       | Posts           |

## 📁 Project Structure
The project follows a standard feature-based structure to keep the code organized and maintainable.
```bash
postly/
├── config/                 # Exports your .env to the rest of the app to use
│     └── env.js
│
├── controllers/            # Handles request logic
│   ├── auth.controller.js
│   └── post.controller.js
├── middleware/             # Custom middleware (e.g., auth)
│   └── auth.middleware.js
├── models/                 # Mongoose schemas and models
│   ├── user.model.js
│   └── post.model.js
├── routes/                 # API route definitions
│   ├── auth.routes.js
│   └── post.routes.js
├── .env                    # Environment variables
├── package.json  
└── app.js                  # Main application entry point
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or a connection string from a cloud provider like MongoDB Atlas.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/postly.git](https://github.com/your-username/postly.git)
    cd postly
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the root of the project and add the variables from the `.env.example` file (see the next section).

4.  **Start the server**
    ```sh
    npm run start
    ```
    The server should now be running on `http://localhost:PORT`.

## ⚙️ Configuration

Create a `.env` file in the root directory of the project and add the following environment variables. Use this `.env.example` file as a guide.

-   `PORT`: The port the Express server will run on.
-   `MONGO_URI`: Your MongoDB connection string.
-   `JWT_SECRET`: A secret key for signing JSON Web Tokens.
-   `JWT_EXPIRES_IN`: The expiration time for a JWT (e.g., `1d`, `7h`).

  
