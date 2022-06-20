import React from 'react'
import { accordianData } from './AccordianData';


function Accordian() {

    const [isActive, setActive] = React.useState("");

    function handleClick() {
        setActive(isActive == "" ? "active" : "");
    }

    console.log(isActive)

    let accordianElements = accordianData.map(data => {
        return (
            <div key={data.title} className="accordian--container ">

                <h1 className="accordian--title" onClick={handleClick}>{data.title}</h1>
                <div className={`accordian--content ${isActive}`}>{data.content}</div>

            </div>
        )
    })


    return (
        accordianElements
    )
}

export default Accordian