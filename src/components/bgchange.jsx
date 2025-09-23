import React, { useRef, useEffect, useState } from "react";

function BgChange({ bgcolor }) {

    const [color, setColor] = useState("olive") // default color, can be changed later
    console.log(bgcolor, color);

    let bgc = useRef(null); // reference to the background container or ref={bgc} in JSX inside div where id="bg"
    console.log("Background container:", bgc);

    useEffect(() => {
        if (bgc.current) {
            bgc.current.style.backgroundColor = color; // set initial background color
        }
    }, [color]); // update background color when color changes


    return (
        <>
            <div id="bg" ref={bgc} className="container p-5 rounded-lg shadow-md h-screen duration-500" >

                <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">

                    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-gray-400 px-3 py-2 rounded-2xl">
                        <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
                        <button onClick={() => setColor("skyblue")} style={{ backgroundColor: "skyblue" }}>Sky Blue</button>
                        <button onClick={() => setColor("white")} className="text-black" style={{ backgroundColor: "white" }}>White</button>
                        <button onClick={() => setColor("lavender")} className="text-gray-600" style={{ backgroundColor: "lavender" }}>Lavender</button>
                        <button onClick={() => setColor("pink")} className="text-black" style={{ backgroundColor: "pink" }}>Pink</button>
                        <button onClick={() => setColor("lightgreen")} className="text-black" style={{ backgroundColor: "lightgreen" }}>Light Green</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgChange;