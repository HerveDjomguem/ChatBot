
import React from "react"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './stylebot.css';

const Auth = () => {

    const[name,namechange]=useState("");
    const[password,passwordchange]=useState("");

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={name,password};

    fetch("http://localhost:8080/api/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Connecté avec success.')
        navigate('/admin');
      }).catch((err)=>{
        console.log(err.message)
      })
    }

    return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handlesubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Se Connecter</h3>
              <div className="form-group mt-3">
                <label>Nom de l'Admin</label>
                <input
                  type="name"
                  value={name} onChange={e=>namechange(e.target.value)}
                  className="form-control mt-1"
                  placeholder="Entrer votre nom"
                />
              </div>
              <div className="form-group mt-3">
                <label>Mot de passe</label>
                <input
                  type="password"
                  value={password} onChange={e=>passwordchange(e.target.value)}
                  className="form-control mt-1"
                  placeholder="Entrer mot de passe"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
}

export default Auth;