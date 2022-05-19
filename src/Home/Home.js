import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Task from '../Task/Task';

const Home = () => {
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [tasks])

    const handleAddTask = event => {
        event.preventDefault();
        const taskName = event.target.task.value;
        const description = event.target.description.value;
        //console.log(taskName, description)
        const newTask = { taskName, description };
        fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            toast('New Task added');
            event.target.reset();
        })

    }

    const logout = () => {
        signOut(auth);
      };

    return (
        <div className='text-center'>
            <div>
                <div className='flex justify-center gap-5 my-5'>
                <h2 className='text-3xl text-center font-bold'>To-Do</h2>
                {
                    user ? <button onClick={logout} className='w-24  bg-red-600 rounded text-stone-100 font-medium p-2 hover:bg-red-700'>Sign Out</button> : ''
                }
                </div>
                <form onSubmit={handleAddTask}>
                    <input className="shadow appearance-none border rounded py-2 px-3 w-6/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id='task' name='task' placeholder='Task Name' required />
                    <br />
                    <br />
                    <textarea className="shadow appearance-none border rounded py-2 px-3 w-6/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='description' name='description' placeholder='Task Description' rows='4' cols='30' required></textarea>
                    <br />
                    <input className="bg-blue-500 w-6/12 hover:bg-blue-600 text-white w-6/12 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add Task" />
                </form>
            </div>

            <div className='mt-10'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                    ></Task>)
                }
            </div>

        </div>
    );
};

export default Home;