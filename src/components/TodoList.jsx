import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden dark:bg-gray-800 transition">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
            ))
            }

        </div>
    );
};
export default TodoList;
