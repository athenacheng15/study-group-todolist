import { TaskItemNew, TaskItemDone } from './TaskItem';

const TaskList = () => {
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between text-sm">
                <div className="flex space-x-2">
                    <p className="text-[#4EA8DE]">Tasks created</p>
                    <div className="px2 flex items-center justify-center rounded-full bg-neutral-700 px-2 text-xs text-white">
                        5
                    </div>
                </div>
                <div className="flex space-x-2">
                    <p className="text-[#8284FA]">Completed</p>
                    <div className="flex h-5 items-center justify-center rounded-full bg-neutral-700 px-2 text-xs text-white">
                        2 of 5
                    </div>
                </div>
            </div>
            <div className="mb-16 mt-4 space-y-2">
                <TaskItemNew />
                <TaskItemNew />
                <TaskItemNew />
                <TaskItemDone />
                <TaskItemDone />
            </div>
        </div>
    );
};

export default TaskList;
