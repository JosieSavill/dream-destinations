export default function MainNav({setScreen}){
  return <>
   <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("home")}>Home</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("resume")}>About</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("north")}>North America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("south")}>South America</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("europe")}>Europe</a></li></ul>
                    </button>

                    <button className="portallink">
                        <ul><li><a onClick={()=>setScreen("asia")}>Asia</a></li></ul>
                    </button>

                    
                    <button className="portallink createAccount" style={{ border: '2px solid white' }}>
                        <ul>
                            <li>
                            <a onClick={() => setScreen("portfolio")}>Create Account</a>
                            </li>
                        </ul>
                    </button>

  </>
}