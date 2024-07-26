import { TbTrash } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa6';

const TaskItemNew = () => {
    return (
        <div className="flex justify-between rounded-md bg-neutral-800 p-4">
            <div className="flex space-x-3">
                <div className="w-4">
                    <button className="mt-1 h-4 w-4 rounded-full border-2 border-[#4EA8DE]" />
                </div>
                <p className="mr-6 break-words text-sm text-white">
                    Integer urna interdum massa libero auctor neque turpis
                    turpis semper. Duis vel sed fames integer.
                </p>
            </div>
            <div className="ml-8 w-6">
                <TbTrash className="text-neutral-500" size={20} />
            </div>
        </div>
    );
};

const TaskItemDone = () => {
    return (
        <div className="flex justify-between rounded-md bg-neutral-800 p-4">
            <div className="flex space-x-3">
                <div className="w-4">
                    <button className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#8284FA] bg-[#8284FA]">
                        <FaCheck className="text-white" size={10} />
                    </button>
                </div>
                <p className="mr-6 break-words text-sm text-neutral-500 line-through">
                    Integer urna interdum massa libero auctor neque turpis
                    turpis semper. Duis vel sed fames integer.
                </p>
            </div>
            <div className="ml-8 w-6">
                <TbTrash className="text-neutral-500" size={20} />
            </div>
        </div>
    );
};

export { TaskItemNew, TaskItemDone };
