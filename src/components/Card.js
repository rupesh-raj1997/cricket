import React from "react";
import Button from "./Button";
import Opponents from "./Opponents";
import ProgressBar from "./WinChances";


export default function Card(props) {
    return (
        <div className="h-48 w-48 bg bg-slate-800 rounded-2xl p-1">
            <div className="m-2">
                <Opponents />
            </div>
            <div className="m-2">
                <Button label="09 June, 07:00PM"></Button>
            </div>
            <div className="m-2">
                <ProgressBar percentage={20} />
            </div>
        </div>
    )
}