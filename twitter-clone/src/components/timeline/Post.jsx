import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import "./Post.css";

function Post({ displayName, userName, verified, text, avatar, image }) {
  return (
    <div className='post'>
        {/* ツイート主アイコン */}
        <div className='post_avatar'>
            <Avatar src={avatar}/>
        </div>

        {/* アイコン以外 */}
        <div className='post_body'>

            {/* 名前からtweet内容まで */}
            <div className='post_header'>

                {/* 名前とID */}
                <div className='post_headerText'>
                    <h3>{displayName}
                        <span className='post_headerSpecial'>
                            {verified && <VerifiedUserIcon className='post_badge' />}
                            @{userName}
                        </span>
                    </h3>
                </div>

                {/* ツイート内容 */}
                <div className='post_headerDescription'>
                    <p>{text}</p>
                </div>
            </div>

            {/* 画像 */}
            <img src={image} />

            {/* フッター(リプ、RT、いいね、ブックマーク) */}
            <div className='post_footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post