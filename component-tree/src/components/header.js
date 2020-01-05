import React from 'react'
import logo from '../logo.svg'
import UserInfo from './user-info'


function Header(props)
{
    return(
        <div>
            <img src={logo} className='App-logo' alt="logo"/>
            <UserInfo comment={props.comment}></UserInfo>
        </div>
    ) 
}


export default Header