**Blog Post REST API**

A simple RESTful API using Express.js and MongoDB allows users to create a new blog post, retrieve all blog posts or a single one by ID, update, and delete a blog post by ID.

**Technologies Used**

- Node.js

- Express.js

- MongoDB + Mongoose



**API Endpoints**

POST /new
Create a new blog post

Example body:
{
  "title": "My First Blog",
  "content": "This is the content of the blog.",
  "author": "Alex Ly"
}

GET /all
Get all blog posts

GET /get/:id 
Get a single blog post

POST /update/:id 
Update a single blog post

DELETE /delete/:id 
Delete a single blog post
