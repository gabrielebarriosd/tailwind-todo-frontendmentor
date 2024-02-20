import CrossIcon from "./icons/CrossIcon";
const TodoItem = () => 
{
    return(
        <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online javascript curse</p>
            <button className="flex-none"><CrossIcon/></button>
        </article>
    );
}
export default TodoItem;