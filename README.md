# Week 10: CommunityHub API

## Author
- **Name:** Mary Macharia
- **GitHub:** marymacharia521-netizen
- Site live at https://marymacharia521-netizen.github.io/iyf-s10-week-10-marymacharia521-netizen
- **Date:** April 12, 2026

## Project Description
This project is a backend REST API built using Node.js and Express.js.
It allows users to create, read, update, and delete community posts.

## Technologies Used
- JavaScript
- Node.js
- Express.js
- dotenv
- Postman

## Features
- Get all posts
- Get single post
- Create post
- Update post
- Delete post
- Like posts
- Middleware logging
- Error handling

## How to Run

1. Clone repository

```bash
git clone <your-repo-url>
```

2. Install dependencies

```bash
npm install
```

3. Run server

```bash
node server.js
```

OR

```bash
npx nodemon server.js
```

4. Open:

```bash
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get single post |
| POST | /api/posts | Create post |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

## Lessons Learned
- How to create Express servers
- CRUD operations
- Middleware
- REST APIs
- Error handling

## Challenges Faced
I struggled with understanding route parameters and middleware at first, but testing the API with Postman helped me understand how requests and responses work.

## Screenshots
(Add screenshots here if available
