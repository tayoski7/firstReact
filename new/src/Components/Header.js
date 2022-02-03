import React from 'react'

    const Header = () => {
        return(
            <div style={{
                width:"100%",
                height:"100px",
                backgroundColor:"black",
                display:"flex",
                justifyContent:"space-around",
                justifyItems:"center",
                alignItems:"center",
            }}
            >
                <div style={{
                    width:"50%",
                    display:"flex",
                    justifyContent:"space-around",
                }}>
                    <a style={{
                        color:"white",
                        textDecoration:"white",
                    }} href="#">
                        Home
                    </a>
                <a style={{
                    color:"white",
                    textDecoration:"white",
                }}
                href="#">About</a>
                <a style={{
                    color:"white",
                    textDecoration:"white",
                }}
                 href="#">Best Deals</a>
                <a  style={{
                    color:"white",
                    textDecoration:"white",
                }}
                    href="#">Tools</a>
                <a style={{
                    color:"white",
                    textDecoration:"none",
                }}
                href="#">Contact</a>
                </div>
            </div>
        )
    }

    export default Header