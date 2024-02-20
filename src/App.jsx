import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const App = () => {
    return (
        <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen">
            <Header />
            <main className="container mx-auto px-4 mt-8 ">
                <TodoCreate />
                {/* TodoList (TodoItem) TodoUpdate & TodoDelete*/}
                <TodoList />
                <TodoComputed />
                <TodoFilter />
            </main>

            <footer className="text-center mt-8">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
