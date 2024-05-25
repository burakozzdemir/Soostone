# Todo List
# Tech
- [Next.js 14] - Next.js is an open-source React framework that enables functionalities like server-side rendering, static site generation, and building web applications optimized for performance and SEO.
- [TypeScript] - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [TailwindCss] - React-infinite-scrol is a popular open-source library for implementing infinite scrolling in React applications.
- [React-beautiful-dnd] (RBD) is a popular library for implementing drag-and-drop functionalities in React applications. It's built and maintained by Atlassian and is designed to provide a high-performance, accessible drag-and-drop experience with a simple and powerful API.
- [Visual Studio Code] - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

#### Drag and Drop Functionality
- Users can manage tasks by dragging and dropping them between different status columns, such as "To Do", "In Progress", and "Done", using the react-beautiful-dnd library.
- Tasks can be moved by the user to different columns, and upon completion of the drag operation, the task's new status and order are updated based on where the user drops it.

#### Adding New Tasks
- Users can add new tasks by filling out a form with details such as task title, description, assignee, and status.
- Once the form is submitted, the new task is added to the appropriate status column and included in the task list stored in the tasks.json file.
- Users can specify which status the task belongs to during the submission, allowing for immediate categorization of the task.

#### Task Listing and Management
- Upon application launch, tasks fetched from the tasks.json file are displayed to the user organized by their status.
- Users can view details of each task and move tasks between different statuses as needed.
- These features enable effective task management and facilitate seamless transitions between tasks. The drag-and-drop and task addition functionalities enrich the user experience and provide dynamic interaction.

## App Flow

#### Project Structure
```
project
|-- public
|-- src
|    |-- components
|    |      |-- Task
|    |      |-- TaskColumn
|    |      |-- TaskForm
|    |-- pages
|    |      |-- _app.tsx
|    |      |-- index.tsx
|    |-- data
|    |      |-- tasks.json
|    |-- styles
|    |      |-- global.css
|    |-- types
|    |      | -- task.ts
|    |-- next-env.d.ts
|-- package.json
`-- README.md
```