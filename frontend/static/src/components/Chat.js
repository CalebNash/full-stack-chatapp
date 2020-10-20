import React from 'react';
import Cookies from 'js-cookie';

function ChatList(props){
  return(
    <div>{props.message.user}: {props.message.message}</div>
  );
}


class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      message: '',
      user: '',
      interval: 0,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentDidMount(){
    this.fetchMessages();
     const interval = setInterval(this.fetchMessages, 2000);
     this.setState({interval})

  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  fetchMessages(){
     fetch('/api/v1/chats/')
     .then(response => response.json())
     .then(data => this.setState({messages: data}))
     .catch(error => console.log('Error:', error));
   }

   async handlePost(e, msg, usr){
     e.preventDefault();
    const obj = {user: usr, message: msg}
     const options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'X-CSRFToken': Cookies.get('csrftoken'),
       },
       body: JSON.stringify(obj)
     };

     const handleError = (err) => console.warn(err);
     const responce = await fetch('/api/v1/chats/', options);
     const data = await responce.json().catch(handleError);

     if(data.key){
       Cookies.set('Authorization', `Token ${data.key}`)
     }

   }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    //console.log(this.state.messages);
    const messages = this.state.messages.map(message => <ChatList key={message.id} message={message}/>)
    return(
      <div>
      <h1>Messages</h1>
      <button type="button" className="btn btn-primary" onClick={this.props.handleLogout}>Logout</button>
        <form className="col-12" onSubmit={(event) => this.handlePost(event, this.state.message, this.state.user)}>
          <div className="form-group">
            <label htmlFor="title">New Message</label>
            <input type="text" className="form-control" id="New Message" name="message" value={this.state.message} onChange={this.handleChange}/>
          </div>
        <button type="submit" className="btn btn-primary">Send</button>
        </form>
        {messages}
      </div>
    )
  }
}

export default Chat;
