/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './stylebot.css';


const Message = (props) => {
    return(
        <div className="yooo">
            <div className="card-panel grey lighten-5 z-depth-1 container ">
              <div className="row valign-wrapper">
               {props.speaks==='Bot' &&
                <>
                    <div className="col-s1">
                    <a href="/">{props.speaks}</a>
                    </div>
                    <div className="col_s11">
                    <img className="ko" src={require("../../assets/bot.png")}/> 
                      <span className="black-text1">
                        {props.text}
                      </span>
                    </div>
                </>
              }
              </div>
            </div>

            <div className="card-panel2 grey lighten-5 z-depth-1 container">
              <div className="row valign-wrapper">
              
              {props.speaks==='Moi' &&
                <>
                    <div className="col-s2">
                   
                    <a href='/'>{props.speaks}</a> 
                    </div>
                  <div className="col_s10">
                  <img className="ko" src={require("../../assets/user.png")}/>
                    <span className="black-text1">
                      {props.text}
                      </span>
                    </div>
                </>
              }
              </div>
            </div>
        </div>
    )
}

export default Message;