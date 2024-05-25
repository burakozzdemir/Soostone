import { Droppable } from "react-beautiful-dnd";
import Task from "../Task";
import { ITask } from "../../types/task";

interface TaskColumnProps {
  status: string;
  tasks: ITask[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks }) => {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          className="task-column flex-1 bg-gray-300 m-2 p-4 shadow rounded min-w-72"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2 className="text-lg font-bold mb-3 text-black">{status}</h2>
          {tasks.map((task, index) => (
            <Task key={task.title} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
