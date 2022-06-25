import React from 'react';
import "./Product.css";

function Product
() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>Borosil Hydra</p>
            <p className='product__price'>
                <small>Rs. </small>
                <strong>750</strong>
            </p>
            <div className='product__rating'>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
            </div>
        </div>
        <img src='https://unsplash.com/s/photos/water-bottle'/>
        <button>Add to Cart </button>
    </div>
  )
}

export default Product
