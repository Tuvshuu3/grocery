import React from "react";
import '../../styles/Bottom_menu.css'
import Bottom_Menu_Square from "./bottom-menu-square";
import Menu_shop from '../../assets/menu_shop.svg'
import Menu_explore from '../../assets/menu_explore.svg'
import Menu_cart from '../../assets/menu_cart.svg'
import Menu_favorite from '../../assets/menu_favorite.svg'
import Menu_account from '../../assets/menu_account.svg'

const Bottom_Menu = () => {
    return (
        <div className='bottom_menu'>
            <Bottom_Menu_Square icon={Menu_shop} menu_words='Shop' menu_navigation='/shop'/>
            <Bottom_Menu_Square icon={Menu_explore} menu_words='Explore' menu_navigation='/explore'/>
            <Bottom_Menu_Square icon={Menu_cart} menu_words='Cart' menu_navigation='/cart'/>
            <Bottom_Menu_Square icon={Menu_favorite} menu_words='Favorite' menu_navigation='/favorite'/>
            <Bottom_Menu_Square icon={Menu_account} menu_words='Account'/>
        </div>
    )
}

export default Bottom_Menu;