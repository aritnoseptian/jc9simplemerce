import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import cookies from 'universal-cookie'

import { onLoginUser } from '../action'

const cookie =new cookies() 

class Login extends Component {

    
    onButtonClick = () => {
        
        var user = this.username.value 
        var pass = this.password.value

        
        this.props.onLoginUser(user, pass)
        
    }

    render () {
        if(this.props.user.username === ''){
            return (
                <div>
                    <h1>{this.props.user.username}</h1>
                    <div className = 'mt-5 row'>
                        <div className = 'col-sm-4 mx-auto card'>
                            <div className = 'card-body'>
                                <div className = ' border-bottom border-secondary card-title'>
                                    <h1>Login</h1>
                                </div>
    
                                <div className='card-title'>
                                    <h4>Username</h4>
                                </div>
                                <form className='input-group'>
                                    <input className='form-control' type='text'
                                        ref={(input) => {this.username = input}}
                                    />
                                </form>
    
                                <div className='card-title'>
                                    <h4>Password</h4>
                                </div>
                                <form className='input-group'>
                                    <input className='form-control' type='password'
                                        ref={(input) => {this.password = input}}
                                    />
                                </form>
    
                                <button onClick={this.onButtonClick} className='btn btn-success'>Click for Login</button>
                                <p>Belum memiliki akun ?</p> 
                                <p><Link to="/register" >Daftar disini</Link></p>
                            </div>
                        </div>
                    </div>
    
                </div>
            )
        }

        
        return <Redirect to='/'/>
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, {onLoginUser})(Login)