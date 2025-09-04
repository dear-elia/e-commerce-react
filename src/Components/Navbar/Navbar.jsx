import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo_elia.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  //For underlining the menu when you click on it
  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={logo} alt=""/></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("new")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/new'>NEW</Link>{menu=="new"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("best")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/best'>BEST</Link>{menu=="best"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("dress")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/dress'>DRESS</Link>{menu=="dress"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("outer")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/outer'>OUTER</Link>{menu=="outer"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("top")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/top'>TOP</Link>{menu=="top"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("acc/bag")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/acc/bag'>ACC/BAG</Link>{menu=="acc/bag"?<hr/>:<></>}</li> 
        <li onClick= {()=>{setMenu("shoes")}}><Link style={{textDecoration: 'none', color: '#e86b67'}} to='/shoes'>SHOES</Link>{menu=="shoes"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <ul className='nav-login-list'>
          <Link style={{textDecoration: 'none', color: '#e86b67'}} to='/login'><li>LOGIN</li></Link>
          <Link style={{textDecoration: 'none', color: '#e86b67'}} to='/joinus'><li>JOIN US</li></Link>
        </ul>
        <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  ) 
}