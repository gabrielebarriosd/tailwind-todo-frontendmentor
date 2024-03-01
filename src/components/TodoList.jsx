import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import TodoItem from "./TodoItem";



const TodoList = ({ todos, updateTodo, removeTodo, handleDragEnd }) => {
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {
                    (droppableProvider) => (
                        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden dark:bg-gray-800 transition" ref={droppableProvider.innerRef} {...droppableProvider.droppableProps}>
                            {todos.map((todo, index) => (
                                <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                                    {
                                        (draggableProvider) => (
                                            <TodoItem todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}
                                                ref={draggableProvider.innerRef}
                                                {...draggableProvider.dragHandleProps}
                                                {...draggableProvider.draggableProps}
                                            />
                                        )
                                    }
                                </Draggable>
                            ))
                            }
                            {droppableProvider.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </DragDropContext>
    );
};
export default TodoList;
