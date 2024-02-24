import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { useEffect, useState } from "react";

/*const initialStateTodos = [
    { id: 1, title: 'Go to the gym', completed: true },
    { id: 2, title: 'Buy groceries', completed: false },
    { id: 3, title: 'Write code', completed: false },
    { id: 4, title: 'Call mom', completed: true },
    { id: 5, title: 'Read a book', completed: false }
];*/
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {



    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const updateTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const computedItemsLeft = todos.filter(todo => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    }
    const [filter, setFilter] = useState('all');
    const filterTodos = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    }

    return (
        <div className="
        bg-gray-300 
          bg-[url('./assets/images/bg-mobile-light.jpg')] 
          bg-no-repeat bg-contain min-h-screen 
          dark:bg-gray-900 
          dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
          transition-all duration-1000
          md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
          dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className="container mx-auto px-4 mt-8 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                {/* TodoList (TodoItem) TodoUpdate & TodoDelete*/}
                <TodoList todos={filterTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />
                <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;