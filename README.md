# Task Manager

A simple React-based Task Manager web application with authentication and full CRUD operations for tasks.

## Features
- User authentication (login required to access Home page)
- Add, edit, update, delete, and fetch tasks
- Tasks are persisted in localStorage
- Responsive and modern UI using custom CSS and Bootstrap
- Navigation bar with links to Home, Login, Signup, and Logout

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd MiniProject
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
MiniProject/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage
- **Login**: Use one of the sample users or "Admin" as username and password to log in.
- **Home**: Add, edit, update, and delete tasks. Tasks are saved in your browser's localStorage.
- **Logout**: Logs out the current user.

## Technologies Used
- React
- Vite
- Bootstrap (for some UI elements)
- Custom CSS

## License
This project is licensed under the MIT License.

---
Feel free to fork, modify, and contribute!
