# 🚀 Pollify - Real-Time Polling Application

A modern real-time polling platform that allows users to create polls, vote instantly, and view live results without refreshing the page.

Built using the MERN stack with Socket.IO for real-time communication.

---

## 📌 Features

### 👤 User Features

- Create custom polls
- Add multiple voting options
- Vote on polls in real-time
- View live poll results
- Responsive UI for mobile and desktop
- Instant updates using WebSockets

### ⚡ Real-Time Features

- Live vote count updates
- No page refresh required
- Socket.IO powered communication
- Multiple users can vote simultaneously

### 🎨 UI Features

- Modern landing page
- Interactive poll cards
- Animated components using Framer Motion
- Clean and responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO

### Authentication (Planned)

- JWT Authentication
- Protected Routes
- Role-Based Access Control

---

## 📂 Project Structure

```text
Polling-App/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── sockets/
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Schema

### Poll

```javascript
{
  question: String,
  options: [
    {
      text: String,
      votes: Number
    }
  ],
  createdAt: Date
}
```

---

## 🔄 Application Workflow

1. User creates a poll.
2. Poll data is stored in MongoDB.
3. Poll is displayed to all users.
4. User votes on an option.
5. Backend updates vote count.
6. Socket.IO emits updated poll data.
7. All connected clients receive live updates instantly.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Polling-App
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173

JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Poll Routes

#### Create Poll

```http
POST /api/polls
```

#### Get All Polls

```http
GET /api/polls
```

#### Get Poll By ID

```http
GET /api/polls/:id
```

#### Vote On Poll

```http
POST /api/polls/:id/vote
```

---

## 🎯 Future Improvements

- User authentication
- Poll expiration timer
- Anonymous voting
- Shareable poll links
- Poll analytics dashboard
- Admin panel
- QR code poll sharing
- Dark mode support
- Multiple poll categories
- AI-generated poll suggestions

---

## 📸 Screenshots

Add screenshots here after completing the project.

---

## 🌟 Why This Project?

This project demonstrates:

- Full-Stack Development
- REST API Design
- Real-Time Communication
- State Management
- MongoDB Database Design
- Responsive UI Development
- Socket.IO Integration

These are highly relevant skills for Software Development Engineer (SDE) internships and campus placements.

---

## 👨‍💻 Author

Aditi Rajoriya

Built as a placement-focused MERN stack project to showcase real-time application development skills.
