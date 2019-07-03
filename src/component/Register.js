import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Register extends Component {

    onButtonClick = () => {
        const user = this.username.value
        const email = this.email.value
        const pass = this.password.value

        axios.get(
            'http://localhost:3004/users',
            {
                params: {
                    username: user
                }
            }
        ).then( res => {
            if(res.data.length > 0){
                console.log('username sudah digunakan')
            } else {

                axios.get(
                    'http://localhost:3004/users',
                    {
                        params: {
                            email: email
                        }
                    }
                ).then( res => {

                    if(res.data.length > 0){
                        console.log('email sudah digunakan')
                    }else {

                        axios.post(
                            'http://localhost:3004/users',
                            {
                                username: user,
                                email: email,
                                password: pass
                            }
                        ).then( res => {
                            console.log('Data berhasil di input')
                            console.log(res)
                        }).catch( (err) => {
                            console.log('Gagal post data')
                            console.log(err)
                        })
                                
                            
                    }
                })
            }
        }).catch( err => {
            console.log('gagal request')
        })
        
    } 

    render() {
        return (
            <div>
                
                <div className = 'mt-5 row'>
                    <div className = 'col-sm-4 mx-auto card'>
                        <div className = 'card-body'>
                            <div className = ' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>

                            <div className='card-title'>
                                <h4>Username</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control' type='text'
                                    ref={(input) => {this.username = input}}
                                />
                            </from>

                            <div className='card-title'>
                                <h4>email</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control'
                                    ref={(input) => {this.email = input}}
                                />
                            </from>

                            <div className='card-title'>
                                <h4>password</h4>
                            </div>
                            <from className='input-group'>
                                <input className='form-control' type='password'
                                    ref={(input) => {this.password = input}}
                                />
                            </from>

                            <button onClick={this.onButtonClick} className='btn btn-success'>Click for Register</button>
                                <p>Sudah Punya akun ?</p> 
                                <p><Link to="/login" >Login Disini</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register