import React from "react";
import './WinChances.css';

// took from codepen https://codepen.io/saas/pen/VwvaGKv?editors=1010

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

export default function ProgressBar(props) {
    return (
        <>
            <h3 className="text-white text-xs font-bold mb-1">Win Percentage</h3>
            <div className="progress-bar mb-2">
                <Filler percentage={props.percentage} />
            </div>
            <div className="flex justify-between">
                <p className="text-xs">
                    <span className="text-green-400 ">●</span>
                    <span className="text-white"> Ind({parseInt(props.percentage)})%</span></p>
                <p className="text-xs"><span className="text-white">● </span><span className="text-white"> SA({100 - parseInt(props.percentage)})%</span></p>
            </div>
        </>
    )
}