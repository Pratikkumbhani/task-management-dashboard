import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const ItemTypes = {
  CARD: "card",
};

export default function TaskColumn({ status, tasks, moveCard, deleteCard }) {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (draggedItem) => moveCard(draggedItem.id, status),
  });

  return (
    <div ref={drop} className={`bg-gray-200 p-4 w-full min-h-[400px] rounded`}>
      <h3 className="text-xl font-bold mb-2">{status}</h3>
      <div className="bg-gray-100 rounded p-2 min-h-[300px]">
        {tasks?.length !== 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteCard={deleteCard} />
          ))
        ) : (
          <p className="text-center mt-5">No Data Found</p>
        )}
      </div>
    </div>
  );
}
