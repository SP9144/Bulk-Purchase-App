import React, {Component} from 'react';
import axios from 'axios';

export default class LoginUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Logging in...");

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/login', newUser)
            .then(res => {     
                console.log(res.data[0].type)                       
                if(res.data[0].type === "Customer")
                {
                    console.log("Customer Logged in!!")
                    this.props.history.push({                            
                        pathname: 'customer/' + res.data[0].username
                    })
                }
                else if(res.data[0].type == "Vendor")
                {
                    console.log("Vendor Logged in!!")
                    this.props.history.push({
                        pathname: 'vendor/' + res.data[0].username
                    })
                }
                else{
                    // console.log(res.data.type)
                    console.log("Not logged in. :( Try Again!!")
                    this.props.history.push(
                        {
                            pathname: '/login'
                        })
                }

            });

        this.setState({
            username: '',
            // email: '',
            password: '',
            // type: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               placeholder = "Name"
                               />
                    </div>
                    {/* <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               placeholder = "Email"
                               />  
                    </div> */}
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               placeholder = "Password"
                               />  
                    </div>
                    {/* <div className="form-group">
                        <label>Type: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.type}
                               onChange={this.onChangeType}
                               placeholder = "Vendor or Customer"
                               />  
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Login User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
