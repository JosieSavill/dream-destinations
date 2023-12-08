export default function TopNav ({setScreen}){

    return  <ul>
                
                    <li><a className="gmail" onClick={()=>setScreen("About")}>Reservations</a></li>

                    <li><a className="gmail" onClick={()=>setScreen("About")}>Listings</a></li>

                    <li><a className="gmail" onClick={()=>setScreen("About")}>Agents</a></li>

                    <li><a className="gmail" href="mailto:FiordaSavillJosie@gmail.com">Contact</a>
                    </li> 

                 </ul>

}



