import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class CredentialForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          name:'',
          email:'',
          password:'',
      }
  }  
  handleSubmit = e => {
      e.preventDefault();
      let formStatus = true;
      let n = this.state.name;
      let em = this.state.email;
      let p = this.state.password;

      if(n=="" || n.length<3){
          formStatus = false;
          alert("Please enter a valid name");
          return;
      }
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
        localStorage.setItem("name",n);
        localStorage.setItem("email",em);
        localStorage.setItem("password",p);
        this.props.history.push('/signup');
      }
  }
  handleChange = e => {
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  render() {
    return (
      <div>
         <br></br>

        <form onSubmit={this.handleSubmit} className="ui form stackable center aligned one column grid">
        <h1 className="centered">React Application</h1>

            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Name</label>
                        <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Name"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
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
            <div className="row">
                <Link to="/login">Already have an account?</Link>
            </div>
        </form>
      </div>
    )
  }
}
