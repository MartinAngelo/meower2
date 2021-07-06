import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import SidebarOptions from "../Posting/SidebarOptions";


export default function Sidebar() {
    return (<
        div className="sidebar" >

        <
            img src="./assets/pusa1.png"
            alt="" />
        <
            SidebarOptions active Icon={HomeIcon}
            text="Home" /
        >
        <
            SidebarOptions Icon={SearchIcon}
            text="Explore" /
        >
        <
            SidebarOptions Icon={NotificationsNoneIcon}
            text="Notifications" /
        >
        <
            SidebarOptions Icon={MailOutlineIcon}
            text="Messages" /
        >
        <
            SidebarOptions Icon={BookmarkBorderIcon}
            text="Bookmarks" /
        >
        <
            SidebarOptions Icon={ListAltIcon}
            text="Lists" /
        >
        <
            SidebarOptions Icon={PermIdentityIcon}
            text="Profile" /
        >
        <
            SidebarOptions Icon={MoreHorizIcon}
            text="More" /
        >

        <
        Button className="sidebar_meower"
            variant="outlined" >
            MEOWER < /Button>     <
        /div>
            );
}