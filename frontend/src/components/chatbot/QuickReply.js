//Component pour les messages rapides
import React from 'react';
import './stylebot.css';


const QuickReply = () =>{
    return (
        <div className='quick'> 
        <div>
        <b> Send us a message</b> <br/>
         We will reply as soon as we can
        </div>
           
         <div >
          <img  style={{ height:40 , width:45 }} src={require("../../assets/next.png")}/> 
          </div>
        </div>
        
    )
}

export default QuickReply;