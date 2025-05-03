import React, { useState } from 'react';

export default function AddTaskModal({ onClose, onSave }) {
  const [form, setForm] = useState({ title: '', description: '', status: 'To Do' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-4 rounded w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-2">Add New Task</h2>
        <input className="border p-2 w-full mb-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea className="border p-2 w-full mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <select className="border p-2 w-full mb-4" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add Task</button>
      </form>
    </div>
  );
}
