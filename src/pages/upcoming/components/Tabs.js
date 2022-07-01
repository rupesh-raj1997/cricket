import React, { useEffect, useState } from "react"

export default function Tabs(props) {
    const labels = ['All', 'International', 'Domestic'];
    const [selectedLabel, setSelectedLabel] = useState('');

    useEffect(() => {
        console.log('props',  props.selectedLabel)
        setSelectedLabel('All');
    }, [props]);


    const handleClick = (e) => {
        if (e.target.textContent) setSelectedLabel(e.target.textContent)
    }
    return (
        <div className="inline-flex border-white border-2 rounded-lg p-3">
            {labels && labels.map((link, index) =>
                <div key={index} value={link} className="cursor-pointer mx-4"  onClick={handleClick}>
                    <div
                        className={
                            selectedLabel === link
                                ? 'text-teal-500 border-teal-500 border-2 bg-slate-800 rounded-2xl  px-6' : 'text-white'}>
                        {link}
                    </div>

                </div>
            )
            }
        </div >
    );
}