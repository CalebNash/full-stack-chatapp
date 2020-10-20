import React from 'react';
//import Cookies from 'js-cookie';
import './App.css';

class Message extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [],
    }
  }
  componentDidMount(){
    fetch('/api/v1/chats/')
    .then(response => response.json())
    .then(data => this.setState({messages: data}))
    .catch(error => console.log('Error:', error));
  }

  render(){
    return(
      <div>
        hello
      </div>
    )
  }
}

export default Message;
