import React from 'react'

const Hero = () =>{

    return(
        <div style={{
            backgroundColor:"blue",
            width:"100%",
            height:"500px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <p style={{
                color:"white",
                fontSize:"40px",
            }}>
                The perfect lightweight theme for your next project
            </p>
        </div>
    );

}

export default Hero;