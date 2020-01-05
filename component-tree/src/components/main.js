import React from 'react'
import Header from './header'
import Content from './content'

function Main(props)
{
    return(
        <div>
            <Header comment={props.comment}></Header>
            <Content comment={props.comment}></Content>
        </div>
    )
}

export default Main