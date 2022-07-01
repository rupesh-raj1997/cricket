import React from "react"

export default function MatchLink(props) {
    return (
        <div className="w-full bg-slate-800 rounded-2xl ">
            <div className="flex items-center justify-between p-4 text-white">
                <div >
                    <span className="bg-red-800 px-2 rounded-sm">
                        INT
                    </span>
                    <span className="font-bold text-lg  px-2">
                        South Africa tour of India, 2012
                    </span>
                </div>
                <img src="./arrowRight.png" alt="Right Arrow" height="20rem" width="20rem"></img>
            </div>
        </div>
    );
}