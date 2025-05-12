import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditTaskModal({ onClose, editId, onSave }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const getEditData = () => {
    axios
      .get(`https://6815f0d732debfe95dbce136.mockapi.io/api/tasks/${editId}`)
      .then((res) => {
        let tmpData = res?.data;
        setForm({
          title: tmpData?.title,
          description: tmpData?.description,
          status: tmpData?.status,
        })
        console.log(res, "res from get ID");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (editId) {
      getEditData();
    }
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        className="bg-white p-4 rounded w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-bold mb-2">Edit Task</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <select
          className="border p-2 w-full mb-4"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
