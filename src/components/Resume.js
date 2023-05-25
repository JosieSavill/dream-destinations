import Nav from "./Nav"



export default function Resume ({setScreen}){


    return <div>
        <Nav setScreen={setScreen}/>
        
        <div className="container">
        <br></br>
        <br></br>
       
        <a href="https://onedrive.live.com/?authkey=%21AL9%2DkpCBddDnoIk&cid=39BBF03792AAC217&id=39BBF03792AAC217%21472&parId=39BBF03792AAC217%21104&o=OneUp" style={{ fontSize: '20px' }}><strong>Download My Resume</strong></a> <br/>
               
         <br></br>
         <br></br>
         <br></br>
               
         
<h1 style={{fontSize: '33px', color: 'white', paddingBottom: '10px'}}><strong>Front End Proficiencies</strong></h1>
<ul style={{fontSize: '24px', color: 'white' }}><li>React</li><li>Tailwind</li><li>Handlebars</li><li>Cloudinary</li><li>JavaScript</li><li>JQuery</li><li>Bootstrap</li></ul>
<br></br>
<br></br>


<h1 style={{fontSize: '33px', color: 'whitesmoke', paddingBottom: '10px'}}><strong>Back End Proficiencies</strong></h1>
<ul style={{fontSize: '24px', color: 'white' }}><li>Apollo, GraphQL</li><li>MongoDB, Mongoose</li><li>REST</li><li>MySQL, Sequelize</li><li>Express</li><li>Node</li><li>APIs</li></ul>





        
        
        </div>
        
        </div>
}