# Connectify - Real-time Chat Application

<h2><a href="https://connectify.onrender.com" rel="noopener noreferrer" target="_blank">Connectify - Start Messaging</a></h2>

### Connectify is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), integrated with Socket.IO for live messaging. The frontend uses React, Tailwind CSS and DaisyUI, with Zustand for state management. Users can create accounts, login, and chat in real time with other users. Additionally, Textory comes with 35 pre-integrated UI themes, allowing users to personalize their chat interface for a richer and more interactive experience.

<h3><a href="https://connectify.onrender.com" rel="noopener noreferrer" target="_blank">Live Link: https://connectify.onrender.com</a></h3>

## Features

<ul align="left">
<li><b>Real-time chat using Socket.IO</b></li>
<li><b>Global state management using Zustand</b></li>
<li><b>Profile management for users</b></li>
<li><b>User authentication with JWT tokens</b></li>
<li><b>Secure password storage using bcrypt</b></li>
<li><b>Cloudinary integration for storing images</b></li>
<li><b>Responsive UI built with Tailwind CSS & DaisyUI</b></li>
<li><b>Functionality for checking current online users</b></li>
<li><b>35 pre-integrated UI themes to personalize the UI/UX</b></li>
</ul>

## Tech Stack

- Frontend: React, Tailwind CSS, DaisyUI, Zustand, React Router, Socket.IO Client, React Hot Toast, React Icons
- Backend: Node.js, Express.js, MongoDB, Mongoose, Socket.IO Server, JWT
- Database: MongoDB Atlas
- Cloud Storage: Cloudinary (Media Files Storage)
- Deployment: Render

## Installation & Setup

### 1. Install Repository

```
git clone https://github.com/OmkarArdekar12/Connectify.git
```

### 2. Environment Variables Configuration

2.1. Create a .env file in the backend folder with the following keys:

```
PORT=5001 #or your_port
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_CLOUD_API_KEY=your_api_key
CLOUDINARY_CLOUD_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173 #or your_frontend_url
NODE_ENV=development #or your_mode
```

2.2. Create a .env file in the frontend folder with the following keys:

```
MODE=production  #or your_port
BASE_URL=http://localhost:5001 #or your_backend_url
```

### 3. Backend Setup

```
cd backend
npm install
npm run dev
```

### 4. Frontend Setup

```
cd frontend
npm i
npm run dev
```

<br>
<br>
<hr>
