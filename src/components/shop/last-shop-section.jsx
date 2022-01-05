import React from "react";
import Product_detail from '../product/product.item'
import '../../styles/Shop-Section.css'

const Shop_Section = ( {title, data } ) => {
    return(
    <div className='Section'>
        <div className='Title'>{title}</div>
        <div className='Useless'>
            <div className='Pulses'></div>
        </div>
        <div className='ListOfItems'>
            {data.map((item, index) => {
                return <Product_detail data={item} index={index}/>
            })}

        </div>
    </div>)
}

export default Shop_Section;