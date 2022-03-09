import React, { Component } from 'react'
import { Link, Routes, Route, useParams, renderMatches } from 'react-router-dom'
import Invoice from './Invoice'

var products = [
    {
        id: 1,
        slug : "iphone",
        name: "Iphone",
        price: 400
    },
    {
        id: 2,
        slug : "samSung",
        name: "SamSung",
        price: 250
    },
    {
        id: 3,
        slug : "nokia",
        name: "Nokia",
        price: 300
    }
]
class Products extends Component {
    render() {
        var {renderMatches} = this.props
        console.log(renderMatches)
        return (
            <div className='container'>
                <h1>Danh sách sản phẩm</h1>

                <div className="row">

                    <ul className="list-group">
                        {this.showProducts(products)}
                    </ul>

                </div>
                <Routes>
                    <Route
                        path="products/:slug"
                        element={<Invoice/>}
                    />
                </Routes>
            </div>
        );
    }
    
    showProducts = (products) => {
        var result = products.map((product, index) => {
            return (
                <Link key={index} to=''>
                    <li className="list-group-item">{product.id} - {product.name} - {product.price}</li>
                </Link>

            )
        })
        return result
    }
}


export default Products;
