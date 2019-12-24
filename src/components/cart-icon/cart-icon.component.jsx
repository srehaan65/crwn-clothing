import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden,itemCount})=>(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
    
        </div>
    );   


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())  //***important to mention  () after  toggleCartHidden ie.  toggleCartHidden() */
});

const mapStateToProps=state=>({
        itemCount:selectCartItemsCount(state)
        // itemCount:cartItems.reduce((a,b)=>a+b.quantity,0)
    });   
    

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);