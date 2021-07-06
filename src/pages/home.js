import React from 'react'
import Nav from "../Components/nav";
import Sidebar from "../Components/sidebar";
import Feed from "../Posting/Feed";
import "../Css/SidebarOption.css";
import "../Css/sidebar.css";

function home() {
    return (

        <
        div className = "home" >
        <
        Nav / >
        <
        Sidebar / >
        <
        Feed / >
        <
        /div>

    )
}
export default home();