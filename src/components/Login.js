import React, { Component } from 'react'
import './../App.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }

    onChangeLogin = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { txtUsername, txtPassword } = this.state
        if (txtUsername === 'admin' && txtPassword === '123') {

            localStorage.setItem('USER', JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }))

        } else console.log('that bai')
    }
    render() {
        return (
            <div>

                <form type="submit" onSubmit={this.onSubmit}>

                    <legend>Login</legend>

                    <div className="col-sm-12">
                        <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>

                        <div className="col-sm-8">
                            <input
                                type="text"
                                name="txtUsername"
                                id="inputUsername"
                                className="form-control col-sm-8"
                                placeholder="Nhập username"
                                onChange={this.onChangeLogin}
                            />

                        </div>
                    </div>

                    <div className="col-sm-12 mt-2">
                        <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                name="txtPassword"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Nhập password"
                                onChange={this.onChangeLogin}
                            />
                        </div>

                    </div>
                    <div className="col-sm-12 text-center mt-2">
                        <button className="btn btn-primary" >Login</button>
                    </div>
                </form>



            </div>
        );
    }
}


export default Login;
