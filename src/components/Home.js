import React from "react";
import Nav from "./Nav";
import myVideo  from "../assets/dark-horse.mp4";

export default function Home({ setScreen }) {

    return (
        <div className="page-wrapper">
             <Nav setScreen={setScreen} />
            <div className="video-background">
                <video autoPlay loop muted style={{width: "100%"}}>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
           
      
        </div>
    );
}

















