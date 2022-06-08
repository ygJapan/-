import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar_twitterIcon'/>

        {/* サイドバーオプション */}
        <SidebarOption text="ホーム" Icon={HomeIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="話題を検索" Icon={SearchIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="通知" Icon={MailOutlineIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="メッセージ" Icon={NotificationsNoneIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="リスト" Icon={ListAltIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>

        {/* サイドバーオプション */}
        <SidebarOption text="もっとみる" Icon={MoreHorizIcon}/>

        {/* ツイートボタン */}
        <Button variant="outlined" className='sidebar_tweet'>ツイートする</Button>

    </div>
  )
}

export default Sidebar
