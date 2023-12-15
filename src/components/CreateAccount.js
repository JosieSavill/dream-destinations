// export default function CreateAccount (){

//     return  <section className="portfolio">

//        <div className="projects">

//        <iframe width="560" height="315" src="https://www.youtube.com/embed/bAEprBbAfZM?si=z9aFMu5jN98C_kQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            
//         </div>

//        </section>
// }

export default function CreateAccount () {

    return <section className="create-account">

        <div className="projects">

        <form>
        <label className="account-label">
        Enter Email Address:
        <input
          type="text"
          
        />
        </label>
        <button type="submit" className="submit-button">Create Account</button>
        </form>

        </div>
      
    </section>
}
