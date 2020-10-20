import React from 'react';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      register: false,

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <form className="col-12" onSubmit={(event) => this.props.handleLogin(event, this.state, this.state.register)}>
      <div className="form-group">
        <label htmlFor="title">username</label>
        <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">email</label>
        <input type="email" className="form-control" id="email" name="email" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">password</label>
        <input type="text" className="form-control" id="password" name="password" value={this.state.title} onChange={this.handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <button type="submit" className="btn btn-primary" onClick={() => this.setState({register: true})}>Register</button>
    </form>
      </div>
    )
  }
}

export default Login;
