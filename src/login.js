import React from 'react';
import {Component } from 'react'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }  
    handleSubmit = e => {
        e.preventDefault();
        let formStatus = true;
        let em = this.state.email;
        let p = this.state.password;
  
        if(em==""){
            formStatus = false;
            alert("Please enter a valid email");
            return;
        }
        if(p=="" || p.length<8){
            formStatus = false;
            alert("Please enter a valid Password\nIt must be 8 characters long");
            return;
        }
        if(formStatus){
          let checkE = localStorage.getItem('email');
          let checkP = localStorage.getItem('password');

          if(checkE!==em){
              alert("Invalid Account \n Signup to continue");
              this.props.history.push('/');
          }
          if(checkP!==p){
            alert("Invalid Password");
        }
          if(checkE==em && checkP==p){
              this.props.history.push("/posts");
          }
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  
    render(){
        return(
            <div>
         <br></br>

        <form onSubmit={this.handleSubmit} className="ui form stackable center aligned one column grid">
        <h1 className="centered">Spritle Application</h1>

            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Email</label>
                        <input onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Password</label>
                        <input  onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            <div className="row">
                <button className="ui button" type="submit">Submit</button>
            </div>
        </form>
      </div>
        )
    }
}