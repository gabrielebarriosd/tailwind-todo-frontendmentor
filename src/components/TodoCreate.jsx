import { useState } from 'react';
const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  const handleSumbitAddTodo = (e) => {
    e.preventDefault();

    if (title.trim().length > 0) {
      createTodo(title);
      return setTitle('');
    }

    setTitle('');
  }
  return (
    <form onSubmit={handleSumbitAddTodo} className="dark:bg-gray-800 transition bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center">
      <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-600 outline-none dark:bg-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
export default TodoCreate;