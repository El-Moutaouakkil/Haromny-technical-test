import React from "react";
import Button from "../ui/Button";

function ActionButtons() {
    return (
        <div className='flex gap-x-2'>
            <Button text='Request a demo' outlined />
            <Button text='Start for free' primary />
        </div>
    );
}

export default ActionButtons;
