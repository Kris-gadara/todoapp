# ✨ Modern Todo List Application

A beautiful, modern todo list application built with React frontend and Node.js backend, featuring a clean UI with smooth animations and full CRUD functionality.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Real-time Updates**: Instant feedback for all actions
- **Responsive Design**: Works perfectly on desktop and mobile
- **Dark Mode Support**: Automatically adapts to system preferences
- **Error Handling**: Comprehensive error handling with retry functionality
- **Loading States**: Smooth loading indicators for better UX
- **Progress Tracking**: Visual progress indicator for completed tasks
- **Accessibility**: ARIA labels and keyboard navigation support

## 🏗️ Project Structure

```
ToDoList/
├── backend/                 # Node.js + Express API
│   ├── models/
│   │   └── todo.js         # MongoDB Todo model
│   ├── routes/
│   │   └── todoRoutes.js   # API routes
│   ├── index.js            # Server entry point
│   ├── package.json        # Backend dependencies
│   └── env.example         # Environment variables template
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Modern styling
│   │   └── main.jsx        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── index.html          # HTML template
└── README.md              # This file
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Beautiful icons
- **Modern CSS** - Flexbox, Grid, Animations

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp env.example .env
   ```

4. Update `.env` with your MongoDB connection string:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Toggle todo completion |
| DELETE | `/api/todos/:id` | Delete a todo |
| GET | `/health` | Health check endpoint |

## 🎨 UI Features

- **Gradient Background**: Beautiful purple gradient background
- **Glass Morphism**: Frosted glass effect on the main container
- **Smooth Animations**: Hover effects and slide-in animations
- **Progress Indicator**: Visual progress bar showing completion percentage
- **Empty State**: Friendly empty state when no todos exist
- **Loading States**: Spinner animations during API calls
- **Error Handling**: User-friendly error messages with retry options

## 📱 Responsive Design

The application is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🌙 Dark Mode

The application automatically detects and adapts to your system's dark mode preference, providing a seamless experience in both light and dark environments.

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to platforms like Heroku, Railway, or Vercel
3. Update the frontend API URL to point to your deployed backend

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- Design inspiration from modern web applications
- Built with ❤️ using React and Node.js 