import React from 'react'
import { Link } from 'react-router-dom'

class Checkout extends React.Component {



    render() {
        return (
            <center>
                <Link to='/'>
                    <button className="btn btn-warning text-white" > <i className="fa fa-angle-left"></i></button>
                </Link>

                <span> <strong> Total : $ {this.props.total} </strong></span>
            </center>
        )
    }
}

export default Checkout