# Code Snippets App (MERN Microservices)

<!-- ## Live Demo

[Live Demo Link](https://code-snippets-app-demo.vercel.app/) *(replace with actual link if deployed)* -->

## Tech Stacks Used

* **Frontend**:
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

* **Backend**:
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)

* **Database**:
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)

* **Communication**:
  RESTful APIs (each service runs independently)

## Introduction

The Code Snippets App is a microservices-based MERN stack application designed for developers to create, store, and manage code snippets with the ability to comment and categorize. It aims to improve productivity by providing a structured space for snippet storage and collaboration.

## Features

1. **Create and Save Snippets**: Add and manage code snippets with titles and language labels.
2. **Commenting System**: Comment on individual snippets to discuss or annotate code.
3. **Microservices Architecture**: Scalable and maintainable backend divided into independent services.
4. **REST API Communication**: Clear and decoupled service interactions.
5. **Fast Frontend**: Optimized with Vite and styled using Tailwind CSS.

## Project Structure

```
code-snippets-app/
├── client/         # Frontend - React + Vite + Tailwind CSS
├── snippets/       # Snippets Microservice - Node.js + Express
├── comments/       # Comments Microservice - Node.js + Express
```

### Snippets Service

* Handles CRUD operations for code snippets.
* Connects to MongoDB to store snippet data.

### Comments Service

* Manages comments related to snippets.
* Each comment references a snippet ID.

### Client

* Built with React and Vite.
* Communicates with backend services via REST APIs.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/code-snippets-app.git
cd code-snippets-app
```

### 2. Set Up Backend Services

#### Snippets Service

```bash
cd snippets
npm install
npm run dev
```

#### Comments Service

Open a new terminal:

```bash
cd comments
npm install
npm run dev
```

> Ensure MongoDB is running locally.

### 3. Set Up Frontend

```bash
cd client
npm install
npm run dev
```

### 4. Environment Variables

Each service should include a `.env` file. Example:

#### snippets/.env

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/snippetsdb
```

#### comments/.env

```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/commentsdb
```

## Usage

1. Start both backend services and the frontend.
2. Visit [http://localhost:5173](http://localhost:5173).
3. Create and manage snippets.
4. Add comments to snippets.

## Future Enhancements

* User authentication and authorization
* Tagging and search support
* Dark/light mode
* Deployment with Docker

---

Thank you for using Code Snippets App! Feel free to contribute by opening issues or submitting pull requests.
