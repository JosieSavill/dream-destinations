import logoImg from "../assets/castle.svg";

export default function Nav({setScreen}){
    // const topNav = [
    //     {
    //         title: "Reservation",
    //         screen: "About"
    //     },
    //     {
    //         title: "Listing",
    //         screen: "About"
    //     },
    //     {
    //         title: "Agent",
    //         screen: "About"
    //     }, {
    //         title: "Contact",
    //         screen: "About"
    //     }

    // ]

    const topNav = [
        {
            title: "Home",
            screen: "home"
        },
        {
            title: "About",
            screen: "resume"
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
            screen: "portfolio"
        }
    ]


    
    return <header>
        <nav className="topNav">
            {/* <ul>
                {
                    topNav.map( m => {
                        return  <li><a onClick={()=>setScreen(m.screen)}>{m.title}</a></li>
                    })
                }
            </ul> */}

            <ul>
                <li>
                        <img src={logoImg} width={154} height={90}/>
                </li>
                {
                    topNav.map( m => {
                        return  <li><a onClick={()=>setScreen(m.screen)}>{m.title}</a></li>
                    })
                }
            </ul>
        </nav>
        {/* <nav className="mainNav">
                
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

        </nav> */}
        
        </header>
}