import logo from './logo.svg';
import "./Reset.css"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import MenPage from './MenPage';
import React, { Component } from 'react'
import WomenPage from './WomenPage';
import Kids from './Kids';
import CartPage from './CartPage';


export default class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Routes>
          <Route path='/clothesStore/' element={<Navigation />}>
            <Route index element={<WomenPage/>}/>
            <Route path="men" element={<MenPage/>}/>
            <Route path= "kids" element={<Kids/>}/>
            <Route path="cartPage" element={<CartPage/>}/>
          </Route>
        </Routes >
      </div >

    )
  }
}
