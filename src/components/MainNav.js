import logoImg from "../assets/castle.svg";

export default function MainNav({setScreen}){
    

    const mainNav = [
        {
            title: "Home",
            screen: "home"
        },
        {
            title: "About",
            screen: "about"
        },
        {
            title: "North America",
            screen: "north"
        },
         {
            title: "South America",
            screen: "south"
        },
        {
            title: "Europe",
            screen: "europe"
        },
        {
            title: "Asia",
            screen: "asia"
        },
        {
            title: "CreateAccount",
            screen: "createAccount"
        }
    ]


    
    return <header>
        <nav className="mainNav">
            

            <ul>
                <li>
                        <img src={logoImg} width={154} height={90}/>
                </li>
                {
                    mainNav.map( m => {
                        return  <li><a onClick={()=>setScreen(m.screen)}>{m.title}</a></li>
                    })
                }
            </ul>
        </nav>
      
        
        </header>
}