import React from "react"

export default function Heading(props) {
    return (
        <h1 className="text-white font-bold text-2xl">
            {props.children}
        </h1>
    );
}