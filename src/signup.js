import React from 'react';
import {Component } from 'react'

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleDate=this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            mobile : '',
            dat : '',
            addr : '',
            valid : false,
        }
        console.log(Date());
    }
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        let formStatus = true;
        let mob = this.state.mobile;
        let d = this.state.valid;
        let ad = this.state.addr;
        if(!d){
            formStatus = false;
            alert("Please Enter Valid date");
            return;
        }
        if(mob=='' || mob.length<10){
            formStatus = false;
            alert("Please Enter Valid mobile number");
            return;
        }
        if(ad==""){
            formStatus = false;
            alert("Please enter valid Address");
            return;
        }
        if(formStatus){
            let input = document.getElementById('pic');
            if(input.value==''){
                alert("Please upload a valid pic");
                return;
            }
            else{
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
            
                    reader.onload = function (e) {
                        
                        let du = e.target.result;
                        
                        console.log(du);
                        localStorage.setItem('pic',du);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            localStorage.setItem('dob',d);
            localStorage.setItem('mobile',mob);
            localStorage.setItem('address',ad);
            this.props.history.push('/posts');
        }
    }
    handleMobile(e){
        let mob = e.target.value;

        if(mob.length<=10){
            this.setState({
                mobile:mob
            });
        }
    }
    handleDate(event){
        event.preventDefault();
        let dob=event.target.value;
        let dt = new Date(dob);
        let dd = dt.getDate();
        let mm = dt.getMonth();
        let yyyy = dt.getFullYear();
        let nmm = (mm<10)?'0'+mm:mm;
        let ndd = (dd<10)?'0'+dd:dd;
        let date = ndd + '-' + nmm + '-' + yyyy;
        let cdt = new Date();
        if(yyyy>cdt.getFullYear() || (mm>cdt.getMonth() && yyyy>=cdt.getFullYear()) || (dd>cdt.getDate() && (mm>=cdt.getMonth() && yyyy>=cdt.getFullYear()))){
            alert("Enter valid date");
            date = "dd-mm-yyyy";
        }
        
            this.setState({
                dat : date,
                valid : true,
            });
        
        }
    render(){
        return(
            <div>
         <br></br>

        <form onSubmit={this.handleSubmit} autoComplete="off" className="ui form stackable center aligned one column grid">
        <h1 className="centered">Application</h1>

            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Your Image</label>
                        <input id="pic" type="file" name="pic" placeholder="Your Image"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Your Birthday</label>
                        <input id="birthdate" onChange={this.handleDate} value={this.state.date} type="date" name="dob" placeholder="Date of Bith"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Contact Number</label>
                        <input onChange={this.handleMobile} value={this.state.mobile} id="contact" type="number" required name="contact" placeholder="Mobile Number"/>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div className="field">
                        <label>Your Address</label>
                        <textarea onChange={this.handleChange} required name="addr" placeholder="Address"/>
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
