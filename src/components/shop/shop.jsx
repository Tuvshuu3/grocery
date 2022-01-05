import React from "react";
import '../../styles/Shop.css'
import { products} from "../data";
import HomeScreenTop from '../../assets/homescreentop.svg'
import Search from '../../assets/Search.svg'
import Banner from '../../assets/banner.svg'
import Bottom_Menu from "../main/bottom-menu.jsx";
import Shop_Section from "./shop-section";

const Shop = () => {

    const Fruits = products.filter(el => el.catalog[0] == "Жимс жимсгэнэ")
    const Drinks = products.filter(el => el.catalog[0] == "Шингэн хүнс")
    const Meat = products.filter(el => el.catalog[0] == "Мах махан бүтээгдэхүүн")

    console.log(Fruits)

    return(
        <div className='body_shop'>
            <div className='top'>
                <img src={HomeScreenTop}></img>
                <img src={Search}></img>
                <img src={Banner}></img>
            </div>

            <div className='contents'>
                <Shop_Section data={Fruits} title='Exclusive Offer'/>
                <Shop_Section data={Drinks} title='Best Selling'/>
            </div>

            <div className='Bottom_Menu_for_bottom'>
                <Bottom_Menu />
            </div>

        </div>
    )
}

export default Shop;