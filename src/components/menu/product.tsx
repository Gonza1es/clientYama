import React, {useState} from "react"

import {ProductItem} from "../../models";

interface ProductProps {
    product: ProductItem
}

export function Product (props: ProductProps) {
    const [details, setDetails] = useState(false)
    const root = document.querySelector('#root') as HTMLElement
    let body = document.querySelector('body') as HTMLElement
    function addDescription () {
        setDetails(true)
        let fixed = document.createElement('div')
        body?.classList.add('fixed1')
        fixed.classList.add('fixed_wrp')
        fixed.classList.add('mute')
        fixed.addEventListener('click', closeDescription);
        root?.appendChild(fixed)
    }
    function closeDescription () {
        setDetails(false)
        let fixed = document.querySelector('.fixed_wrp')
        fixed?.remove()

    }

    return (
        <>
            <div className="product">
                <span className="product_name">{props.product.name}</span>
                <span className="product_price">{props.product.price} &#8381;</span>
                {props.product.description !== '' && <button 
                    className="product_btn"
                    onClick={addDescription}
                >
                    Подробнее...
                </button>}
            </div>
            {details && <div className="product_description">
                <button 
                    className="product_description_close"
                    onClick={closeDescription}
                    >
                </button>
                {props.product.imageId && <img className="product_description_img" src={'http://localhost:8088/images/'+props.product.imageId} alt="image" />}
                <span className="product_description_txt">{props.product.description}</span>
            </div>}
        </>
    )
}