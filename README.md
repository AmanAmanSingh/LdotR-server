# LdotR-server

The "LdotR Server" project is a Node.js application built to manage user data and blog via an Express.js API. Retrieve information about  users and blogs ,  including their username, age , email and other relevant details. 



## Run Locally


Clone the project

```bash
   git clone https://github.com/AmanAmanSingh/LdotR-server.git
```

Go to the project directory :

```bash
  cd server
```

Make .env file and paste below :

```bash
EXPRESS_PORT = 8000
BASIC_SERVER_PORT = 5000
MONGO_URI='mongodb+srv://amans7097:amans7097@cluster0.thocp.mongodb.net/mydb'
```

Install dependencies :

```bash
  npm install
```

Start the (nodemon) server :

```bash
    npm run dev
```

## Run With Docker
I've also added a docker-compose.yml file for easier setup. To start the server, simply navigate to the server folder and run the following command:

```bash
docker-compose up
```
This will start the server for you.


## Example

I have mapped the Hello World example to port http://localhost:4200, and the Express server where the blog and user routes are located can be accessed using the following endpoints:

Get All Users (GET): http://localhost:3000/api/v1.0/allusers

Add a User (POST): http://localhost:3000/api/v1.0/addUser

Payload:
```bash
{
  "username": "sumit",
  "email": "sumit@gmail.com",
  "age": 26
}
```
Add a Blog (POST): http://localhost:3000/api/v1.0/addBlog

Payload:

json
Copy code
{
  "title": "The Future of Python",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "author": "Aman Doe"
}
Get All Blogs (GET): http://localhost:3000/api/v1.0/allBlogs

Update a Blog (PUT): /updateBlog/:id

Delete a Blog (DELETE): /removeBlog/:id



## Tech Stack

**Client:** React.js, Redux , redux-toolkit.

**Server:** Node.js, Express.js.


## Support

For support, email amans7097@gmail.com or join our Slack channel.


## Quest 12 : Containerization


Containerization: Explain the advantages of using Docker for deploying a MERN Stack application and provide an example of a real-world use case where Docker enhances development workflows.


Answer : Docker allows us to package our application with all its dependencies (Node.js, MongoDB, etc.) in containers. This ensures the application works the same way in development, testing, and production, avoiding issues like "It works on my machine. 
 With Docker, we can define our entire environment in a Dockerfile and spin up containers with just one command. This makes it easier to set up or scale the app by deploying multiple instances of your app quickly.

## Real-World Example:
Imagine a team working on an e-commerce platform built with the MERN stack. The development environment requires specific versions of Node.js, MongoDB, and a front-end build process. Each developer needs the same environment to avoid compatibility issues. Using Docker, the team can create a containerized version of the app that includes the exact versions of everything needed.

This container is shared with all developers, ensuring that everyone is working in the same environment, whether they are on Windows, macOS, or Linux. This reduces setup time and makes sure there are no version mismatch issues. Similarly, the same Docker setup can be used in production to quickly scale up during peak traffic, like a sale event, by running multiple containers of the app behind a load balancer.

## Quest 13 : Basic Git Commands
Answer : 
1. Basic Git Commands: To work with Git, here are the basic steps:

Clone a repository: 
```Bash
git clone <repository-URL>
```
This command sets up a copy of the main (default) branch on your local machine.

Checkout to a new feature branch:
```Bash
 git checkout -b <branch-name>
 ```
After making some changes:

Add files:
```Bash
 git add .
 ```
This stages all the changes you’ve made to be included in the next commit.

Commit changes:
```Bash
 git commit -m "commit message"
 ```
This saves the staged changes with a commit message.

Pull from the main branch or the working feature branch before pushing to ensure your branch is up to date: git pull origin main

Push to GitHub:
Push the code with:
```Bash
 git push origin <branch-name>.
 ```


## Quest 14 : Branching Strategy
Branching Strategy: We follow a feature branching strategy:

We have a main branch and a feature branch.
For any new task or feature, we create a new branch from the feature branch, like
```Bash 
git checkout -b new-feature-branch
```
After completing work, we pull the latest changes from the feature branch using 
```Bash
git pull origin feature-branch 
```
and merge them into our local branch to ensure we are up to date, and push the new branch back to the feature branch.
Before the sprint ends, we test the feature branch, and have it reviewed, and once approved, we merge it into the main branch.


## Quest 15 : Merging and Resolving Conflicts

Merging and Resolving Conflicts:
Resolving merge conflicts:

Switch to main branch: 
```Bash
git checkout main
```
Pull the latest changes: 
```Bash
git pull origin feature
```
Merge the feature branch: 
```Bash
git merge feature-branch
```
 or take pull from feature to main
If there is any conflict, Git will mark the conflicting files. Open those files, look for <<<< and >>>>, and manually choose which changes to keep.
After resolving conflicts, stage the resolved files:
```Bash
 git add <file-name> or git add .
 ```
Complete the merge: 
```Bash
git commit -m "Resolved merge conflicts"
```
Push to main: 
```Bash
git push origin main
```

## Quest 16 : CI/CD Integration

CI/CD Integration: To set up CI/CD with GitHub Actions for a Node.js app:

Create a .github/workflows/main.yml file in your repository.
Inside the file and define steps like:
Set up Node.js.
Install dependencies with npm install.
Run tests with npm test.
Deploy the application.

for example CI workflow:

yaml
```Bash
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14'
    - run: npm install
    - run: npm test
    - run: npm run deploy
```
Once the code is pushed to the main branch, this workflow will automatically run tests and deploy the latest code.


