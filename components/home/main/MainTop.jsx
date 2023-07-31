import Image from "next/image";
import React from "react";
import Button from "../../ui/Button";

const sidebarItems = [
    "Wiki",
    "Projects",
    "processes",
    "Onboarding",
    "Meetings",
    "Team updates",
    "1:1s",
    " User research",
    "More ->",
];

function MainTop() {
    return (
        <>
            <div className='flex justify-center items-center gap-4 '>
                <Sidebar items={sidebarItems} />
                <Image
                    src='/assets/laptop.png'
                    width={1080}
                    height={400}
                    alt={"here should be a laptop image"}
                />
            </div>
            <div className='my-10 flex flex-col gap-y-3'>
                <h1 className='text-3xl font-semibold justify-center '>
                    All of your documents in one place
                </h1>
                <h5 className='text-xs justify-center '>
                    Project, knowledge base, process, bring all your work to
                    life in docs
                </h5>
                <div className='flex justify-center gap-2'>
                    <Button text={"Get started"} primary />
                    <Button text={"Download the apps"} outlined />
                </div>
            </div>
        </>
    );
}

export default MainTop;

const Sidebar = ({ items }) => {
    return (
        <aside className=''>
            <ul className='text-left '>
                {items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className=' text-sm text-red-950 pl-4 pr-16 py-3 my-1  hover:font-semibold hover:bg-white hover:rounded-sm hover:cursor-pointer'>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};
