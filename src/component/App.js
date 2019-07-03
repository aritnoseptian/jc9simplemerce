import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import cookies from 'universal-cookie'
import { connect } from 'react-redux'

import Header from './Header'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import ManageProduct from './ManagerProduct'
import DetailProduct from './DetailProduct'
import Cart from './Cart'
import Cookies from 'universal-cookie'

import { keepLogin } from '../action'

const cookie = new cookies()

class App extends Component {

    componentDidMount(){
        
        const objCookie = cookie.get('userName') 

        if(objCookie !== undefined){
            
            this.props.keepLogin(objCookie)
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Home}/> {/* equal, ===  */}
                    <Route path="/register" component={Register}/> {/* include() */}
                    <Route path="/login" component={Login}/> {/* include() */}
                    <Route path="/managerproduct" component={ManageProduct}/> {/* include() */}
                    <Route path="/detailproduct/:product_id" component={DetailProduct}/>
                    <Route path='/Cart' component={Cart}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default connect(null, {keepLogin})(App)