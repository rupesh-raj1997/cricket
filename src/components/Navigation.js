import React, { useEffect, useState } from "react"

export default function Navigation(props) {
    const [links, setLinks] = useState([]);
    const [selectedLink, setSelectedLink] = useState('');

    useEffect(() => {
        console.log('props', props.links, props.selectedLink)
        setLinks(props.links);
        setSelectedLink(props.selectedLink);
    }, [props]);


    const handleClick = (e) => {
        if (e.target.textContent) setSelectedLink(e.target.textContent)
    }
    return (
        <div className="w-full flex justify-around">
            {links && links.map((link, index) =>
                <div key={index} value={link} className="flex flex-grow flex-col justify-center items-center cursor-pointer" onClick={handleClick}>
                    <div
                        className={
                            selectedLink === link
                                ? 'text-teal-500' : 'text-white'}>
                        {link}
                    </div>
                    <div style={{ height: '0.1rem' }} className={
                        selectedLink === link ?
                            'bg-teal-500 w-full mt-1' : 'bg-white w-full mt-1'} >
                    </div>
                </div>
            )}
        </div>
    );
}