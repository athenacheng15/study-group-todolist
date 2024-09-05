import { TaskItem } from './TaskItem';

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
                <TaskItem
                    title="Organize Desk"
                    content="Tidy up papers and organize supplies. Ensure everything is in its proper place for better productivity."
                />
                <TaskItem
                    title="Plan Weekly Meals"
                    content="Create a meal plan for the week, considering healthy options. Prepare a grocery list to shop accordingly."
                />
                <TaskItem
                    isDone
                    title="Call the Electrician"
                    content="Schedule an appointment to fix the kitchen lights. Follow up on availability and estimated costs."
                />
                <TaskItem
                    isDone
                    title="Update Portfolio Website"
                    content="Add the latest project and adjust design elements. Ensure that the mobile version is functioning smoothly."
                />
                <TaskItem
                    isDone
                    title="Water the Plants"
                    content="Check moisture levels in the indoor plants and water them accordingly. Don't forget to mist the ferns!"
                />
            </div>
        </div>
    );
};

export default TaskList;
