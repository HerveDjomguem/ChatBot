/* eslint-disable jsx-a11y/alt-text */
//chatbot(causer avec un robot)
import React, {Component} from 'react';
import Message from './Message';
import './stylebot.css';
//import '../../../public/assets';
import QuickReply from './QuickReply';

class Chatbot extends Component {

   
   messagesEnd;
   talkInput;

   constructor(props){
    super(props);
    // Le binding es necessaire pour que la méthode 'this' marche sur le 'callback'
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);


    this.hide = this.hide.bind(this);
    this.hide2 = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.show2 = this.show.bind(this);


    this.state ={
        messages: [],
        showBot: false,
        chat: false
    };

  

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

   show2(event){
    event.preventDefault();
    event.stopPropagation();
     this.setState({chat: true});
   }

   hide(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({showBot: false});
 
  }

   hide2(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({chat: false});
 
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
            //Bien revoir celui-ci
            this.df_text_query(e.target.value);           
            e.target.value = '';
        }
   }

    

    render(){
      if(this.state.showBot){
        return(
            <div className='cardre'>
             <nav>
              <div className='header'>
                <div>
                <a href='/' onClick={this.hide}>  <img  style={{ height:40 , width:40 }} src={require("../../assets/arrow-left.png")}/></a>
                    <a href='/' className='brand-logo'><img  style={{ height:40 , width:120 }} src={require("../../assets/Frame39.png")}/> </a>
                </div>
                    <ul id='nav-mobile' >
                  <a href='/' onClick={this.hide}><img  style={{ height:40 , width:40 }} src={require("../../assets/Closebutton.png")}/> </a>
                 </ul>
              </div>
             </nav>
             // C'est ici qu'il faut introduire des conditions
             <QuickReply/>
           
               <div id="chatbot" style ={{height:388,width:'100%',overflow:'auto'}}>
               
                   {this.renderMessages(this.state.messages)}
                  <div ref={(el) => {this.messagesEnd = el;}}
                      style={{ float: 'left', clear:'both'}}>
                  </div>
               </div> 
                    
                    <div className='s12'>
                    <img  style={{ height:45 , width:45 }} src={require("../../assets/Group12.png")}/> 
                  <img onClick={this.hide2} style={{ height:45 , width:60 }} src={require("../../assets/Group13.png")}/> 
                    </div>
            </div>
        );
    }else {
      return(
        <div style={{position:'absolute', bottom: 0, right:25}}>
         <nav>
          <div className='nav-wrapper'>
             <ul id='nav-mobile' className='right hide-on-med-and-down'>
                  <a href='/' onClick={this.show}><img  style={{ height:40 , width:40 }} src={require("../../assets/Group14.png")}/></a>
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