import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-dom'
import { Link } from 'react-router-dom'

import Checkout from './Checkout'


class Cart extends Component {

    state = {
        cart: [],
        Checkout: false
    }

     componentDidMount () {
         this.getCart()
     }

     getcart = () => {
         axios.get()
     }
     
     getCart = () => {
         axios.get(
             'http://localhost:2019/Cart'
         ).then (res => {
             this.setState({
                 cart: res.data
             })
         })
     }

     onDeleteItem = (id) => {
         axios.delete(' http://localhost:2019/Cart/' + id)
         .then(() => {
             this.getCart()
         }
         )
     }

     getCart = () => {
         axios.get('http://localhost:2019/Cart')
         .then(res => {
             this.setState({cart: res.data,})
         })
     }

     renderList = () => {
         return this.state.cart.map( item => {
             
             return (
                 <tr>
                     <td>{item.idUser}</td>
                     <td>{item.productName}</td>
                     <td>{item.productPrice}</td>
                     <td>{item.inputCart}</td>
                     <td>
                         <img className='list' widht='65px' src={item.inputGambar}/>
                     </td>
                     <button onClick={()=>{this.onDeleteItem(item.id)}} className = 'btn btn-warning'>Delete</button>
                     <td>

                     </td>
                 </tr>
             )
         })
     }
     

     //TESTTSTTSTS
    render() {
        return(
            <div className="container">
                <div className=''>
                    <Link to={'/'}>
                    <button className ='btn btn-outline-primary mt-2'>Countinue shoping</button>                    
                    </Link>
                    <Link>
                    <button className ='btn btn-outline-primary mt-2'>Checkout</button>
                    </Link>
                </div>
                <h1 className="display-4 text-center">CART LIST</h1>
                <table className="table table-hover mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">QTY</th>
                            <th scope="col">PICTURE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
        return <riderect to="/login"></riderect>
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

export default Cart