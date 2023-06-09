// import { useNavigate } from "react-router-dom"

export default function Nav ({setScreen}){


    return <header className="header">
         <div className="logo">JOSIE FIORDA SAVILL{' '}
         <span style={{ fontSize: '1.4rem', fontStyle: 'italic', color: "white"}}>
            Web Developer</span></div>
        <nav>
       
        <ul>
            <li><a onClick={()=>setScreen("Home")}>Home</a></li>

            <li><a onClick={()=>setScreen("About")}>About</a></li>

            <li><a onClick={()=>setScreen("Resume")}>Resume</a></li>

            <li><a onClick={()=>setScreen("Portfolio")}>Portfolio</a></li>

            <li><a onClick={()=>setScreen("Contact")}>Contact</a></li>

        </ul>
        </nav></header>
}



