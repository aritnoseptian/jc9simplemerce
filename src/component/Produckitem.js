import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'
import axios from 'axios'

class ProductItem extends Component {
    addCart = () => {
        const idUser = this.props.user.id
        const qty = this.editQty.value

        var { id, name, price, src} = this.props.barang

    if(qty > 0 && idUser !==''){

        Axios.post(
            'http://localhost:2019/Cart', {
                idUser : idUser,
                idProduct : id,
                productName : name,
                productPrice : price,
                inputCart : qty,
                inputGambar : src
            }).then ( res => {
                console.log(res)
                alert('data berhasil di input')
            })
    } else {
        if(idUser === ''){
            alert("silahkan login")
        }else {
            alert('Isi banyak barang yang anda beli')
        }
    }}

    render(){
        var {id, name, price, src} = this.props.barang 
        return (
            <div className="card col-3 m-5">
                <img src={src} className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Rp. {price}</p>
                    <input type='text' ref={(input)=>{this.editQty = input}} className='form-control'/>
                    <Link to={'/detailproduct/' + id}>
                        <button className='btn btn-outline-primary btn-block'>Details</button>
                    </Link>
                    <button className='btn btn-primary btn-block' onClick={() => {this.addCart (this.props.barang)}}>Add To Cart</button>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}

export default connect (mapStateToProps) (ProductItem)