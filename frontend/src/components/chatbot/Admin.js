//Landing 
import React, { Fragment, useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';
import AllMessaages from './AllMessages';  
import axios from 'axios';
//Geré ce comportement bootstrap
//import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
    const [empdata, empdatachange] = useState(null);

 /*   useEffect( async() => {
        try {
            const res = await axios.get('/api/comments');
          //  return res.json();
            empdatachange(res);
          } catch (error) {
            console.log(error.message);
          }
        
    }, [])*/

    useEffect(() => {
        fetch("http://localhost:8000/comments").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <div className="card-title">
                    <h2>DASHBOARD ADMINISTRATEUR</h2>
                </div>
              
                    <Table striped bordered hover size='5m'>
                        <thead >
                            <tr>
                                <th>messageUser</th>
                                <th>messageBot</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata && empdata.length>0
                              ?
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.messageUser}</td>
                                        <td>{item.messageBot}</td>
                                        <td>{item.date}</td>
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