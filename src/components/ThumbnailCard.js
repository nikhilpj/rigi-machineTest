import React from "react"
const ThumbnailCard=({src})=>{
    return (<div className="border-2 border-black p-1">
        <img src={src}></img>
    </div>)
}
export default ThumbnailCard