import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'

class ProductItem extends Component {
    addCart = (productCart) => {
        const idUser = this.props.user.id
        const qty = this.qty.value

        var { id, name, price, src} = this.props.barang

    if(this.props.user.username !==''){
        if(!(Number.isInteger(qty))) {
            alert("Masukkan Angka Jumlah Barang")
        } else {
         
            Axios.get(
                ' http://localhost:2019/Cart',
                {
                    params: {
                        idProduct: productCart.id,
                        idUser: this.props.user.id
                    }
                }
            ).then(res => {
                if(res.data.length < 1) {

                }
            })
        }

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
                document.location.reload(true)
            })
    } else {
        if(idUser === ''){
            alert("silahkan login")
        }else {
            alert('Isi banyak barang yang anda beli')
        }
    }}

    render(){
        var {id, name, price, src, stock} = this.props.barang 
        return (
            <div className="card col-3 m-5">
                <img  className='card-img-top' src={src}/>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Rp. {price}</p>
                    <p className='card-text'>Stock barang = {stock}</p>
                    <input className="from-control" ref={input => {this.qty = input}} type='text' defaultValue='0'></input>
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