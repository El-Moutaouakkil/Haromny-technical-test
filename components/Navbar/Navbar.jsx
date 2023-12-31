import React from "react";
import ActionButtons from "./ActionButtons";

function Navbar({ items }) {
    return (
        <nav
            className={`flex items-center gap-3 text-sm font-semibold text-red-900`}>
            <ul className='flex gap-5'>
                {items.map((item, index) => (
                    <li key={index} className="hover:cursor-pointer" >{item}</li>
                ))}
            </ul>
            <ActionButtons />
        </nav>
    );
}

export default Navbar;
