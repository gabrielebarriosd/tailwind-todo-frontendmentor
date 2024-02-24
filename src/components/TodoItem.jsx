import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";
const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;
    const isCompleted = completed ? 'line-through' : '';
    return (
        <article className="flex gap-4 border-b-gray-400 border-b dark:bg-gray-800 transition">
            {/*rounded-full border-2 w-5 h-5 flex-none */}
            <button
                className={`rounded-full border-2 w-5 h-5 flex-none ${completed ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : ""}`}
                onClick={(e) => updateTodo(id)}>
                {completed ? <IconCheck /> : ''}
            </button>

            <p className={`text-gray-600 dark:text-gray-300 grow ${isCompleted}`}>{title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}><CrossIcon /></button>
        </article>
    );
}
export default TodoItem;