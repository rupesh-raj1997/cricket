import React from "react";

export default function Button(props) {
    return (
        <button
            className="w-full text-white font-bold bg-slate-600 rounded-lg"
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}