import React from 'react';


class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <div>
      <h1>Register</h1>
      <form className="col-12" onSubmit={(event) => this.props.handleRegistration(event, this.state)}>
      <div className="form-group">
        <label htmlFor="title">username</label>
        <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">email</label>
        <input type="email" className="form-control" id="email" name="email" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">password1</label>
        <input type="text" className="form-control" id="password1" name="password1" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">password2</label>
        <input type="text" className="form-control" id="password2" name="password2" value={this.state.title} onChange={this.handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
      </div>
    )
  }
}

export default Register;
