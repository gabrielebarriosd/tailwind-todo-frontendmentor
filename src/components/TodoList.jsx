import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
};
export default TodoList;
