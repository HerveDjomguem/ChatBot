/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './stylebot.css';


const Message = (props) => {
    return(
        <div className="yooo">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
               {props.speaks==='Bot' &&
                <>
                    <div className="col-s1">
                    <a href="/">{props.speaks}</a>
                    </div>
                    <div className="col_s10">
                      <span className="black-text1">
                        {props.text}
                      </span>
                    </div>
                </>
              }
              
              {props.speaks==='Moi' &&
                <>
                    <div className="col-s2">
                    <a href='/'>{props.speaks}</a>
                    </div>
                  <div className="col_s10">
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