# Connectify - Start Messaging

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![JWT Authentication](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![MERN Stack](https://img.shields.io/badge/MERN-2A2A2A?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

### Connectify is a real-time messaging application built with the MERN stack and Socket.IO for seamless live communication. It features a modern React frontend styled with Tailwind CSS & DaisyUI, along with efficient global state management using Zustand. Users can sign up, log in, and chat effortlessly — sending both text and images in real time. With 35+ built-in UI themes, Connectify offers a customizable and engaging chat experience for every user.

<h3><a href="https://connectify-messenger.onrender.com" rel="noopener noreferrer" target="_blank">Live: https://connectify-messenger.onrender.com</a></h3>

## Features

<ul align="left">
<li><b>Real-time Messaging using Socket.IO</b></li>
<li><b>Global state management using Zustand</b></li>
<li><b>User authentication with JWT tokens and bcrypt</b></li>
<li><b>Functionality for checking currently online users</b></li>
<li><b>Cloudinary integration for storing Media files</b></li>
<li><b>Responsive UI/UX built with Tailwind CSS & DaisyUI</b></li>
<li><b>35 pre-integrated UI themes to personalize the UI/UX</b></li>
</ul>

## Tech Stack

- Frontend: React, Tailwind CSS, DaisyUI, Zustand, React Router, Socket.IO Client, React Hot Toast, React Icons
- Backend: Node.js, Express.js, MongoDB, Mongoose, Socket.IO Server, JWT
- Database: MongoDB Atlas
- Cloud Storage: Cloudinary (Image & Media Uploads)
- Deployment: Render

## Installation & Setup

### 1. Install Repository

```
git clone https://github.com/OmkarArdekar12/Connectify.git
```

### 2. Environment Variables Configuration

- 2.1. Create a `.env` file in the backend folder with the following keys:

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

- 2.2. Command to create secret key for `JWT_SECRET`

```
openssl rand -base64 32
```

- 2.3. Create a `.env` file in the frontend folder with the following keys:

```
MODE=production  #or your_port
VITE_BACKEND_BASE_URL=http://localhost:5001 #or your_backend_url
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

<br/><hr/>
