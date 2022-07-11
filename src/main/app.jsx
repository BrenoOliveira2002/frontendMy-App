import "../common/template/dependencies"
import React from 'react'

import Header from '../common/template/header'
import SideBar from "../common/template/sideBar"
import Footer from "../common/template/footer"
import Routes from './routes'
import Message from "../common/msg/message"

export default props => (

    <div className="wrapper">
        <Header></Header>
        <SideBar></SideBar>
        <div className="content-wrapper">
            <Routes /> 
            <h1>Conteudo</h1> 
        </div>
        <Footer></Footer>
        <Message></Message>
    </div>
)