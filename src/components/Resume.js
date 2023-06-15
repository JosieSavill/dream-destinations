import Nav from "./Nav"



export default function Resume ({setScreen}){


    return <div>
        <Nav setScreen={setScreen}/>
        
        <div className="container">
        <br></br>
        <br></br>
       
        <a href="https://1drv.ms/w/s!AhfCqpI38Ls5l2I_h8_EJTy_ubBy?e=r2OaTP" className="downloadresume"><strong>Download My Resume</strong></a> <br/>
               
         <br></br>
         <br></br>
         <br></br>
               
         
<h1 style={{fontSize: '24px', color: 'white', paddingBottom: '10px'}}><strong>Front End Proficiencies</strong></h1>
<ul style={{fontSize: '24px', color: 'white' }}><li>React</li><li>Chakra</li><li>Handlebars</li><li>Cloudinary</li><li>JavaScript</li><li>JQuery</li><li>Bootstrap</li></ul>
<br></br>
<br></br>


<h1 style={{fontSize: '24px', color: 'whitesmoke', paddingBottom: '10px'}}><strong>Back End Proficiencies</strong></h1>
<ul style={{fontSize: '24px', color: 'white' }}><li>Apollo, GraphQL</li><li>MongoDB, Mongoose</li><li>REST</li><li>MySQL, Sequelize</li><li>Express</li><li>Node</li><li>APIs</li></ul>





        
        
        </div>
        
        </div>
}