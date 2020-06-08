import React from 'react';
import burgerMenuStyles from "./burgerMenuStyles.module.scss";

//For use with sake-shop project

const BurgerMenu = ({ open }) => {
    const cartCTX = useContext(ProductContext);
    const numItems = cartCTX.itemsCount;
    return (
        <StyledBurgerMenu open={open}>
            <a href="/">Home</a>
            <a href="/products">Browse Sake</a>
            <a href="/tours">Events {"&"} Tours</a>
            <a href="/view-cart">Cart ({numItems})</a>
            <a href="/shipping">Shipping</a>
            <a href="/contact">Contact us</a>
        </StyledBurgerMenu>
    )
}

export default BurgerMenu;