import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import shoppingCart from './Images/shopping-cart.png'

export default class Navigation extends Component {
    render() {
        return (
            <>
                <header style={{ padding: "20px 50px", width:"100%" }} >
                    <nav style={{ display: "flex", justifyContent: "space-between",  }}>
                        <ul style={{ display: "flex", width: "20%", justifyContent: "space-between" }}>
                            <li><NavLink to="/clothesStore/">WOMEN</NavLink></li>
                            <li><NavLink to="kids">KIDS</NavLink></li>
                            <li><NavLink to="men">MEN</NavLink></li>
                        </ul>

                       <div style={{display: 'flex', alignItems:"center", gap:"20px"}}>
                        <select style={{ fontSize: "15px", fontWeight: "bold", border:"none" }}>
                            <option ><span style={{fontSize:"18px", fontWeight:"bold"}}>$</span> USD</option>
                            <option><span style={{ fontSize: "18px", fontWeight: "bold" }} >€</span> EURO</option>
                            <option><span style={{fontSize:"18px", fontWeight:"bold"}}>¥</span> JPI</option>
                        </select>
                        <NavLink to="cartPage"><img style={{ width: "40px", height: "40px" }} src={shoppingCart}></img></NavLink>
                        </div>
                    </nav>
                </header>
                <Outlet />
            </>
        )
    }
}
