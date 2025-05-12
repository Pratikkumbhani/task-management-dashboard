import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTaskModal from "./AddTaskModal";
import TaskColumn from "./TaskColumn";
import Loader from "../Common/Loader";
import EditTaskModal from "./EditTaskModal";

const API_URL = "https://6815f0d732debfe95dbce136.mockapi.io/api/tasks";
const statuses = ["To Do", "In Progress", "Done"];

export default function Board() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await axios.get(API_URL);
    console.log(res);
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = (newTask) => {
    console.log(newTask, "newTask");
    setLoading(true);
    let payload = {
      title: newTask?.title,
      description: newTask?.description,
      status: newTask?.status,
    };
    axios
      .post(API_URL, payload)
      .then((res) => {
        fetchTasks();
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally((fin) => {
        setLoading(false);
      });
  };

  const moveCard = async (id, newStatus) => {
    console.log(id, newStatus);
    const tmpTask = tasks?.filter((el) => el.id === id);
    const updatedTask = { ...tmpTask?.[0], status: newStatus };
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${id}`, updatedTask);
      setTasks((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
      fetchTasks()
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to update task:", error);
    }
  };

  const deleteCard = async (id) => {
    console.log(id);
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks()
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to delete task:", error);
    }
  };

  const handleEdit = async (taskDetail) =>{
    console.log(editId, taskDetail);
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${editId}`, taskDetail);
      fetchTasks()
      setLoading(false);
      toggleEditCard(null)
    } catch (error) {
      setLoading(false);
      console.error("Failed to update task:", error);
    }
  }

  const toggleEditCard = (id) =>{
    setEditId(id)
    setShowEditModal(!showEditModal)
  }

  return (
    <>
      {loading && <Loader />}
      <div className="p-4 flex flex-col md:flex-row gap-2.5 justify-between items-center">
        <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add New Task
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 p-4">
        {statuses.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            moveCard={moveCard}
            deleteCard={deleteCard}
            toggleEditCard={toggleEditCard}
          />
        ))}
      </div>
      {showModal && (
        <AddTaskModal onClose={() => setShowModal(false)} onSave={handleAdd} />
      )}
      {showEditModal && (
        <EditTaskModal onClose={() => setShowEditModal(false)} editId={editId} onSave={handleEdit} />
      )}
    </>
  );
}
