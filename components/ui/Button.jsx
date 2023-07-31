import React from "react";

const defaultStyle = "text-sm font-semibold border rounded-full px-3 py-2 ";
const primaryStyle = "text-gray-100 bg-blue-700";
const outlinedStyle = "border-red-900";

function Button({ text, primary, outlined, className }) {
    return (
        <button
            className={`${className} ${defaultStyle} ${primary ? primaryStyle : ""} ${
                outlined ? outlinedStyle : ""
            }`}>
            {text}
        </button>
    );
}

export default Button;
