# Task Management Dashboard

A responsive Kanban-style Task Management Dashboard built with React.js and Tailwind CSS, allowing users to manage tasks in a simple and intuitive interface.

## 🔧 Features

- 🗂 View tasks in three Kanban columns: **To Do**, **In Progress**, and **Done**
- ➕ Add new tasks via a modal form
- 📦 Drag and drop tasks between columns using `react-dnd`
- 🔄 Persist all task operations using a mock API

## 🚀 Tech Stack

- **React.js** – UI Development
- **Tailwind CSS** – Styling
- **React DnD** – Drag and Drop functionality
- **Axios** – API communication
- **MockAPI** – Backend for data persistence  
  `https://6815f0d732debfe95dbce136.mockapi.io/api/tasks`

## 🖼 Project Preview

*https://task-management-dashboard-omega-three.vercel.app*

## 📝 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Pratikkumbhani/task-management-dashboard
   cd task-management-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will run on `http://localhost:3000`.

## 🛠 Architecture Overview

- **App.jsx**: Wraps the app with `DndProvider`
- **Board.jsx**: Fetches tasks and distributes them into columns
- **TaskColumn.jsx**: Accepts dropped tasks and displays current tasks
- **TaskCard.jsx**: Represents a single draggable task
- **AddTaskModal.jsx**: Displays a form to create a new task

## 📬 API Reference

All API interactions use:

```
https://6815f0d732debfe95dbce136.mockapi.io/api/tasks
```

- `GET /tasks` – Fetch all tasks
- `POST /tasks` – Create a task
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task

## ✅ Validations

- Title is required while adding a task.
- Status must be selected from: *To Do*, *In Progress*, or *Done*.

## 📂 Folder Structure

```
src/
│
├── assets/
│   └── icons/
│       └── DeleteIcon.jsx
│
├── components/
│   ├── Common/
│   │   └── Loader.jsx
│   └── Kanban/
│       ├── AddTaskModal.jsx
│       ├── Board.jsx
│       ├── TaskCard.jsx
│       └── TaskColumn.jsx
│
├── App.js
└── index.css
```

## 🧑‍💻 Author

**Pratik Kumbhani**  
Front-End Developer | React.js Specialist