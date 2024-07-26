import { FiPlusCircle } from 'react-icons/fi';

const Input = () => {
    return (
        <div className="mt-[-24px] flex w-full justify-center">
            <input
                className="mr-2 h-[54px] w-full rounded-md bg-neutral-800 px-4 text-neutral-200 outline-none placeholder:text-neutral-600"
                placeholder="Add a new task"
            />
            <button className="flex h-[52px] items-center justify-center space-x-1 rounded-md bg-[#1E6F9F] p-4 text-white">
                <p>Create </p>
                <FiPlusCircle />
            </button>
        </div>
    );
};

export default Input;
