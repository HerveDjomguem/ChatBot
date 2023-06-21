//Landing 
import React, { Fragment, useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';
import AllMessaages from './AllMessages';  
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
//Geré ce comportement bootstrap
 import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        // verifier si c'est message-all
        fetch("http://localhost:8080/api/messages-all").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []) 

    return (
        <Fragment>
             <div className='centrer'>
                    <h1 className='centrer1'>Welcome to the Admin Dashboard ! <Link to="/chatbotadmin" className="btn btn-primary">Se deconnecté</Link> </h1> 
                </div>
            <div style={{margin: "10rem"}}>
           
                <div className="card-title">
                    <h2>Messages History</h2>
                </div>
              
                    <Table striped bordered hover size='5m'>
                        <thead >
                            <tr>
                                <th>User message</th>
                                <th>Bot message</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata && empdata.length>0
                              ?
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.messageBody}</td>
                                        <td>{item.responseBody}</td>
                                        <td>{item.event_time}</td>
                                    </tr>
                                ))
                                :
                                "Aucun message"
                            }

                        </tbody>

                    </Table>
            
            </div>
        </Fragment>
    );
}

export default Admin;