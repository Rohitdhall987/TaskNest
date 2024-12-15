import { useState } from 'react';

function Home() {
    // Dummy tasks for UI demonstration
    const tasks = [
        {
            _id: '1',
            title: 'Design Homepage',
            description: 'Complete the UI for the homepage.',
            status: 'pending',
            priority: 'high',
            dueDate: new Date().toISOString(),
        },
        {
            _id: '2',
            title: 'Fix Login Issue',
            description: 'Debug and fix login-related errors.',
            status: 'in-progress',
            priority: 'medium',
            dueDate: new Date().toISOString(),
        },
        {
            _id: '3',
            title: 'Prepare Report',
            description: 'Summarize Q4 performance metrics.',
            status: 'completed',
            priority: 'low',
            dueDate: new Date().toISOString(),
        },
        {
            _id: '4',
            title: 'Plan Marketing Campaign',
            description: 'Draft ideas for the upcoming product launch.',
            status: 'pending',
            priority: 'medium',
            dueDate: new Date().toISOString(),
        },
    ];

    // Dummy filter state
    const [filter, setFilter] = useState('all');

    // Group tasks by status
    const groupedTasks = {
        pending: tasks.filter((task) => task.status === 'pending'),
        inProgress: tasks.filter((task) => task.status === 'in-progress'),
        completed: tasks.filter((task) => task.status === 'completed'),
    };

    // Priority-based styles
    const priorityStyles = {
        low: 'bg-green-100 border-green-500',
        medium: 'bg-yellow-100 border-yellow-500',
        high: 'bg-red-100 border-red-500',
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4 relative">
            {/* Header */}
            <header className="mb-4">
                <h1 className="text-xl font-bold text-gray-800">Hello, John Doe!</h1>
                <p className="text-sm text-gray-600">Manage your tasks and stay productive!</p>
            </header>

            {/* Filter Section */}
            <div className="mb-4">
                <label htmlFor="filter" className="block text-sm font-medium text-gray-700">
                    Filter Tasks
                </label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Tasks by Status */}
            <div className="space-y-6">
                {Object.entries(groupedTasks).map(([status, tasks]) => (
                    <div key={status}>
                        <h2 className="text-lg font-semibold text-gray-800 capitalize mb-2">
                            {status.replace('-', ' ')} Tasks
                        </h2>
                        {tasks.length > 0 ? (
                            <div className="space-y-4">
                                {tasks.map((task) => (
                                    <div
                                        key={task._id}
                                        className={`p-4 rounded-lg shadow-md border-l-4 ${priorityStyles[task.priority]}`}
                                    >
                                        <h3 className="text-md font-semibold text-gray-800">{task.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{task.description || 'No description'}</p>
                                        <p className="text-xs text-gray-500">
                                            Due: {new Date(task.dueDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">No tasks in this category.</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Add Task Button */}
            <button
                className="fixed bottom-4 right-4 border border-black text-3xl font-bold w-16 h-16 rounded-lg flex items-center justify-center hover:bg-black hover:text-white"
                onClick={() => alert('Navigate to Add Task Page')}
            >
                +
            </button>
        </div>
    );
}

export default Home;
