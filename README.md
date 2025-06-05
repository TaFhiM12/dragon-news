# Dragon News - A Modern News Portal

**Live Demo:** [https://dragon-news-5bd87.web.app/](https://dragon-news-5bd87.web.app/)

## 📌 Overview

Dragon News is a modern news portal built with React, Firebase, and Tailwind CSS. This application features user authentication, categorized news browsing, and a responsive design.

## ✨ Features

- 🔐 Firebase Authentication (Login/Register)
- 📰 Categorized news browsing
- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful UI with Tailwind CSS and DaisyUI
- 🔄 Real-time data fetching
- 🛡️ Protected routes for authenticated users

## 🛠️ Technologies Used

### Frontend
- ![React](https://img.shields.io/badge/React-19.1.0-blue)
- ![React Router](https://img.shields.io/badge/React_Router-7.6.2-orange)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-06B6D4)
- ![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.43-FF7AC1)
- ![Firebase](https://img.shields.io/badge/Firebase-11.8.1-FFCA28)
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)

### Backend
- ![Firebase Authentication](https://img.shields.io/badge/Firebase_Auth-✓-green)
- ![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-✓-green)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TaFhiM12/dragon-news.git
cd dragon-news
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase config:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 📂 Project Structure

```
dragon-news/
├── public/               # Static files
├── src/
│   ├── Components/       # Reusable components
│   ├── Contexts/         # React contexts
│   ├── Firebase/         # Firebase configuration
│   ├── pages/            # Application pages
│   ├── RootLayout/       # Layout components
│   ├── router/           # route
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .env                  # Environment variables
├── vite.config.js        # Vite configuration
```

## 🔥 Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Email/Password authentication
4. Register your web app and get the configuration
5. Add the configuration to your `.env` file

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
