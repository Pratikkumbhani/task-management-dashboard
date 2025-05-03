import React from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "../../assets/icons/DeleteIcon";

const ItemTypes = {
  CARD: "card",
};

export default function TaskCard({ task, deleteCard }) {
  const [, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id: task.id },
  });

  return (
    <div
      ref={drag}
      className={`bg-white p-3 mb-2 rounded shadow cursor-move relative`}
    >
      <div
        onClick={() => {
          deleteCard(task.id);
        }}
        className="absolute right-2 top-2 text-red-500 font-bold cursor-pointer"
      >
        <DeleteIcon />
      </div>
      <h3 className="font-semibold mt-2">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.description}</p>
    </div>
  );
}
