import React from "react";

interface TaskFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 m-2 shadow rounded w-fit bg-gray-800"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="p-2 rounded border-gray-300 w-full mb-2 text-black"
      />
      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
        required
        className="p-2 rounded border-gray-300 w-full mb-2 text-black"
      />
      <select
        name="status"
        required
        className="p-2 rounded border-gray-300 w-full mb-2 text-black"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        required
        className="p-3 rounded border-gray-300 w-full mb-2 text-black"
      ></textarea>
      <input
        type="submit"
        value="Create New Task"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      />
    </form>
  );
};

export default TaskForm;
