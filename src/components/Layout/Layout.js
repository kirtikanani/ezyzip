
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Router'
import Cart from '../UI/cart/Cart'
import { useSelector } from 'react-redux'

const Layout = () => {

  const showCart = useSelector(state=> state.cartUi.cartIsVisible)

  return (
    <div>
      <Header/>

        {showCart && <Cart/>}
        
      <div>
        <Routes/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
