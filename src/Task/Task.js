import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({task}) => {
    const {_id, taskName, description} = task;
    const [lineThrough, setLineThrough] = useState(false);
    const handleComplete = (id, taskName) => {
        setLineThrough(true);
        toast.success(`Task "${taskName}" finished`);
    }
    const handleDelete = id => {
        const isDelete = window.confirm('Are you sure you want to delete this task?');
        if (isDelete) {
            fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Deleted');
                })
        }
    }
    return (
        <div className='w-full md:w-3/4 xl:w-1/2 mx-auto shadow-lg rounded-lg border mb-6 p-4'>
            <p className='text-2xl font-medium text-gray-800 pb-2'>{taskName}</p>
            <p className={lineThrough ? "line-through" : "text-gray-800 pb-2"}>{description}</p>
            <button onClick={() => handleComplete(_id, taskName)} className='w-24 mx-auto bg-sky-500 rounded text-stone-100 font-medium p-2 hover:bg-blue-800 mr-2'>Complete</button>
            <button onClick={() => handleDelete(_id)} className='w-24 mx-auto bg-red-600 rounded text-stone-100 font-medium p-2 hover:bg-red-700'>Delete</button>
        </div>
    );
};

export default Task;