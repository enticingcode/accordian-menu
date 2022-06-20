import React from 'react'


function Accordian(props) {

    const [isActive, setActive] = React.useState("");

    function handleClick() {
        setActive(isActive == "" ? "active" : "");
    }



    return (
        <div className="accordian--container ">

            <h1 className="accordian--title" onClick={handleClick}>{props.title}</h1>
            <div className={`accordian--content ${isActive}`} > {props.content}</div>

        </div >
    )
}

export default Accordian