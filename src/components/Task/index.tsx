import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../..//types/task';

interface TaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.title} index={index}>
      {(provided) => (
        <div
          className="task bg-gray-400 p-3 my-2 rounded shadow hover:bg-blue-500"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <p className="text-sm text-gray-900">Assignee: {task.assignee}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
