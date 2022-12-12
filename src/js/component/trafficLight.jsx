import React from "react";

const TrafficLight = (props) => {

    const handleClickRed = (event) => {
        props.handleRed(event.currentTarget.color)
    }

    const handleClickYellow = (event) => {
        props.handleYellow(event.currentTarget.color)
    }


    const handleClickGreen = (event) => {
        props.handleGreen(event.currentTarget.color)
    }

    return (
        <>
            <div className="t-l t-l-holder"></div>
            <div className="t-l t-l-base">
                <div onClick={handleClickRed} className={"lights red" + (props.colorLight === "red" ? " glow" : "")}></div>
                <div onClick={handleClickYellow} className={"lights yellow" + (props.colorLight === "yellow" ? " glow" : "")}></div>
                <div onClick={handleClickGreen} className={"lights green" + (props.colorLight === "green" ? " glow" : "")}></div>
            </div>
        </>
    )
}

export default TrafficLight;