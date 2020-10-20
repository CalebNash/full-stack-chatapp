import React from 'react';
import Cookies from 'js-cookie';
import './App.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Chat from './components/Chat.js';

class Message extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      page: 'login',
    }
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleRegistration(e, obj){
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj)
    };

    const handleError = (err) => console.warn(err);
    const responce = await fetch('/api/v1/rest-auth/registration/', options);
    const data = await responce.json().catch(handleError);

    if(data.key){
      Cookies.set('Authorization', `Token ${data.key}`)
      this.setState({page: 'login'});
    }

  }

  async handleLogin(e, obj, reg){
    e.preventDefault();
    if(reg){
      this.setState({page: 'register'});
    }else{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj)
      };

      const handleError = (err) => console.warn(err);
      const responce = await fetch('/api/v1/rest-auth/login/', options);
      const data = await responce.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.setState({loggedIn: true});
        this.setState({page: 'chats'})
      }
    }
  }

  async handleLogout(e){
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    };

    const handleError = (err) => console.warn(err);
    const responce = await fetch('/api/v1/rest-auth/logout/', options);
    const data = await responce.json().catch(handleError);

    if(data.detail === "Successfully logged out."){
      Cookies.remove('Authorization');
      this.setState({page: 'login'});
    }

  }

  render(){
    let page = this.state.page;
    let display;

    if(page === 'register'){
      display = <Register handleRegistration = {this.handleRegistration}/>;
    }else if(page === 'login'){
      display = <Login handleLogin = {this.handleLogin}/>;
    }else if(page === 'chats'){
      display = <Chat handleLogout = {this.handleLogout}/>;
    }


    return(
    <div className='container'>
    {display}
    </div>
    )
  }
}

export default Message;
