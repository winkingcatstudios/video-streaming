import { Notifications, Search } from '@material-ui/icons'
import React from 'react'

import "./navBar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src="https://winkingcatstudio.com/winkingcatlogo-transparent-white.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Oneshots</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search/>
                <span>KID</span>
                <Notifications/>
            </div>
        </div>
    </div>
  )
}

export default Navbar