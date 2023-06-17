import React from "react"

const Hero = (props)=>{
    console.log(props)
    return <>
    <img src={props.imgName}/>
    <h1>
        Hello I am {props.heroName}
    </h1>
    </>
}

export default Hero
