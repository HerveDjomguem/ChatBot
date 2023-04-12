//chatbot(causer avec un robot)
import React, {Component} from 'react';
import axios from 'axios';

import Cookies from 'universal-cookie';
import {v4 as uuid} from 'uuid'

import Message from './Message';


const cookies = new Cookies();

class Chatbot extends Component {
   messagesEnd;
   talkInput;

   constructor(props){
    super(props);
    // Le binding es necessaire pour que la méthode 'this' marche sur le 'callback'
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._handleQuickReplyPayload =this._handleQuickReplyPayload.bind(this);

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.state ={
        messages: [],
        showBot: false,
    };

    //cookie accesible sur toutes les pages
    if(cookies.get('userID') === undefined){
      cookies.set('userID', uuid(), {path: '/'});
    }
     console.log(cookies.get('userID')); 

   }

  
  /* async componentDidMount(){
     this.df_event_query('Welcome');
     await this.resolveAfterXSeconds(1);
     if(window.location.pathname ==='/shop' ){
      await this.resolveAfterXSeconds(1);
      this.df_event_query('WELCOME_SHOP');
      this.setState({ showBot: true});
     }
    
   };*/

   
   componentDidUpdate(){
       this.messagesEnd.scrollIntoView({ behaviour: 'smooth'});
      if(this.talkInput){
        this.talkInput.focus();
      }
  
   };

   show(event){
    event.preventDefault();
    event.stopPropagation();
     this.setState({showBot: true});
 
   }

   hide(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({showBot: false});
 
  }




   renderOneMessage(message, i){
    if(message.msg && message.msg.text && message.msg.text.text){
      return (<Message key={i} speaks={message.speaks} text={message.msg.text.text}/>);
    }  
   };

   renderMessages(stateMessages){
    if(stateMessages){
      //console.log('setmessages', stateMessages)
        return stateMessages.map((message, i) =>{
           return this.renderOneMessage(message,i)
        });
        
    }else{
        return null;
    }

   }

   _handleInputKeyPress(e){
        if(e.key === 'Enter'){
            this.df_text_query(e.target.value);           
            e.target.value = '';
        }
   }

    render(){
      if(this.state.showBot){
        return(
            <div style={{height:500,width:400,position:'absolute', bottom: 0, right:0, border:'1px solid lightgrey'}}>
             <nav>
              <div className='nav-wrapper'>
                 <a href='/' className='brand-logo'>ChatBot</a>
                 <ul id='nav-mobile' className='right hide-on-med-and-down'>
                  <li><a href='/' onClick={this.hide}>Fermer</a></li>
                 </ul>
              </div>
             </nav>
               <div id="chatbot" style ={{height:388,width:'100%',overflow:'auto'}}>
               
                   {this.renderMessages(this.state.messages)}
                  <div ref={(el) => {this.messagesEnd = el;}}
                      style={{ float: 'left', clear:'both'}}>
                  </div>
               </div> 
               <div className='s12'>
               <input style={{margin: 0, paddingLeft:'1%', paddingRight:'1%', width:'98%'}} placeholder='Saisir un message:' type="text" ref={(input)=> {this.talkInput = input;}} onKeyPress={this._handleInputKeyPress}/>
               </div>
            </div>
        );
    }else {
      return(
        <div style={{height:80,width:80,position:'absolute', bottom: 0, right:25, border:'1px solid lightgrey'}}>
         <nav>
          <div className='nav-wrapper'>
             <ul id='nav-mobile' className='right hide-on-med-and-down'>
                  <li><a href='/' onClick={this.show}>ChatBot</a></li>
                 </ul>
          </div>
         </nav>
         <div ref={(el) => {this.messagesEnd = el;}}
                      style={{ float: 'left', clear:'both'}}>
                  </div>
        </div>
      );
    }
  }
}

export default Chatbot;