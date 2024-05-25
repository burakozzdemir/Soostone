import { useState, FormEvent } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TaskColumn from '../components/TaskColumn';
import TaskForm from '../components/TaskForm';
import { ITask } from '../types/task';
import initialTasks from '../data/tasks.json';
import { toast, Toaster } from 'react-hot-toast';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
  
    if (!destination) {
      return;
    }
  
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
  
    const newTasks = Array.from(tasks);
    const [reorderedTask] = newTasks.splice(source.index, 1);
    reorderedTask.status = destination.droppableId;
    newTasks.splice(destination.index, 0, reorderedTask);
  
    setTasks(newTasks);
    toast.success('Task successfully updated!');
  };
  

  const tasksByStatus = tasks.reduce<Record<string, ITask[]>>((acc, task) => {
    acc[task.status] = acc[task.status] || [];
    acc[task.status].push(task);
    return acc;
  }, {});

  const handleTaskSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;
    const assignee = (form.elements.namedItem('assignee') as HTMLInputElement).value;
    const status = (form.elements.namedItem('status') as HTMLSelectElement).value;

    const newTask: ITask = {
      title,
      description,
      assignee,
      status
    };

    setTasks([...tasks, newTask]);
    form.reset();
    toast.success('New task added successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <Toaster />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {Object.keys(tasksByStatus).map((status) => (
            <TaskColumn key={status} status={status} tasks={tasksByStatus[status]} />
          ))}
        </div>
        <TaskForm onSubmit={handleTaskSubmit} />
      </DragDropContext>
    </div>
  );
}

export default Home;
