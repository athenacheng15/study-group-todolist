import { TbTrash } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa6';

interface TaskItemProps {
    title: string;
    content: string;
    isDone?: boolean;
}

export const TaskItem = ({ isDone, title, content }: TaskItemProps) => {
    return (
        <div className="flex justify-between rounded-md bg-neutral-800 p-4">
            <div className="flex space-x-3">
                <div className="w-4">
                    {isDone ? (
                        <button className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#8284FA] bg-[#8284FA]">
                            <FaCheck className="text-white" size={10} />
                        </button>
                    ) : (
                        <button className="mt-1 h-4 w-4 rounded-full border-2 border-[#4EA8DE]" />
                    )}
                </div>
                <div>
                    <p
                        className={`font-bold ${isDone ? 'text-neutral-500 line-through' : 'text-white'}`}
                    >
                        {title}
                    </p>
                    <p
                        className={`mr-6 break-words text-sm ${isDone ? 'text-neutral-500 line-through' : 'text-gray-400'}`}
                    >
                        {content}
                    </p>
                </div>
            </div>
            <div className="ml-8 w-6">
                <TbTrash className="text-neutral-500" size={20} />
            </div>
        </div>
    );
};

