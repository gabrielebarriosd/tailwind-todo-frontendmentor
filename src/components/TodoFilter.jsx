const TodoFilter = ({ changeFilter, filter }) => {
  let allClass = '';
  let activeClass = '';
  let completeClass = '';
  allClass = filter === 'all' ? 'text-blue-600' : 'text-gray-500';
  activeClass = filter === 'active' ? 'text-blue-600' : 'text-gray-500';
  completeClass = filter === 'completed' ? 'text-blue-600' : 'text-gray-500';

  return (
    <section className="container mx-auto mt-8 ">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition">
        <button className={`hover:text-blue-600 ${allClass}`} onClick={() => changeFilter('all')}>All</button>
        <button className={`hover:text-blue-600 ${activeClass}`} onClick={() => changeFilter('active')}>Active</button>
        <button className={`hover:text-blue-600 ${completeClass}`} onClick={() => changeFilter('completed')}>Completed</button>
      </div>
    </section>
  );
}

export default TodoFilter;
