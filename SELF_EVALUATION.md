# 📄 Self-Evaluation: Task Management Dashboard

## 🔍 Half-Page Summary

This project is a fully functional Kanban-style Task Management Dashboard built with React.js, Tailwind CSS, and `react-dnd`. The app allows users to view, create, delete, and move tasks between statuses using a responsive drag-and-drop interface. The modal form for task creation validates the input and updates both the UI and backend instantly using Axios and a MockAPI endpoint. The project is responsive, cleanly structured, and demonstrates core front-end best practices.

## 💬 Self-Criticism

While the project meets all functional requirements, there are a few technical debts:
- The drag-and-drop logic, while functional, could be made more modular for scalability.
- There’s currently no confirmation or toast notification system after task creation or movement.
- Error handling for API requests is minimal and could be improved for robustness.
- Accessibility (e.g. keyboard interactions or ARIA labels) hasn't been fully considered.

## ✨ Improvements (With More Time)

- Add toast notifications for feedback on API actions (task created, moved, etc.)
- Improve UX by supporting task editing.
- Introduce context API or Redux for better state management on large-scale expansion.
- Add unit and integration tests using Jest + React Testing Library.

## 📊 Technology Rating (Out of 10)

| Technology        | Rating  |
|-------------------|---------|
| React.js          | 10/10   |
| Tailwind CSS      | 10/10   |
| React DnD         | 8/10    |
| Axios             | 9/10    |
| Overall Structure | 9/10    |