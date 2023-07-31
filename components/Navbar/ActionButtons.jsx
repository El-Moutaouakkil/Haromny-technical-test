import React from "react";

function ActionButtons() {
    return (
        <div className='flex gap-x-2'>
            <button className='text-sm font-semibold border border-red-900 rounded-full px-3 py-2 '>
                Request a demo
            </button>
            <button className='text-gray-100 text-sm font-semibold border border-blue-600 rounded-full px-3 py-2 bg-blue-700 '>
                Start for free
            </button>
        </div>
    );
}

export default ActionButtons;
