import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <div className="w-full max-w-[736px]">
                <Input />
                <TaskList />
            </div>
        </div>
    );
}

export default App;
