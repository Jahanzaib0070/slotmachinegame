import React from "react";

const NotMatching = (props) => {
    return(
        <div className="slot_inner">
            <h1> {props.x} {props.y} {props.z} </h1>
            <h1>Not Matching</h1>
            <hr />
        </div>
    )
}

export default NotMatching;