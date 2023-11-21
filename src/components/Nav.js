// import { useNavigate } from "react-router-dom"



export default function Nav ({setScreen}){


    return <header className="header">
                


        {/* <nav> */}
            
        {/* <button className="portallink">
            <ul><li><a onClick={()=>setScreen("about")}>Home</a></li></ul>
        </button>

        <button className="portallink">
            <ul><li><a onClick={()=>setScreen("resume")} >About</a></li></ul>
        </button>

        <button className="portallink">
            <ul><li><a onClick={()=>setScreen("portfolio")}>Listings</a></li></ul>
        </button> */}


                <ul>
                
                    <li><a className="gmail" onClick={()=>setScreen("About")}>Reservations</a></li>

                    <li><a className="gmail" onClick={()=>setScreen("About")}>Listings</a></li>

                    <li><a className="gmail" onClick={()=>setScreen("About")}>Agents</a></li>

                    <li><a className="gmail" href="mailto:FiordaSavillJosie@gmail.com">Contact</a>
                    </li> 

                 </ul>
        {/* </nav> */}
        {/* <div className="logo">DREAM DESTINATIONS{' '}<br></br>
        <span className="logo-description">The World is your Oyster</span></div> */}
         
            
        
        </header>
}



