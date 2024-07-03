import React from "react";
import Matching from "./maching";
import NotMatching from "./notmatcing";

const SlotM = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props

    return ((x===y) && (y===z))? <Matching x={x} y={y} z={z}/> : <NotMatching x={x} y={y} z={z}/>
}

export default SlotM;