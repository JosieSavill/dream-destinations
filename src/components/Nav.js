// import { useNavigate } from "react-router-dom"

export default function Nav ({setScreen}){


    return <header className="header">
         <div className="logo">JOSIE SAVILL{' '}
         <span style={{ fontSize: '1.4rem', fontStyle: 'italic', color: "white"}}>
            Full Stack Developer</span></div>
        <nav>
       
        <ul>
           
            <li><a onClick={()=>setScreen("About")}>Home</a></li>

      

            {/* <li><a onClick={()=>setScreen("Portfolio")}>Portfolio</a></li> */}

            <li>
            
            <a href="mailto:FiordaSavillJosie@gmail.com">Contact</a>
            </li>

        </ul>
        </nav></header>
}



