import React, { forwardRef, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import "./Post.css";

const timestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const MM = `${date.getMonth() + 1}`.slice(-2);
    const dd = `${date.getDate()}`.slice(-2);
    const HH = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);

    const tweetDate = `${MM}月${dd}日`
    const now = `${new Date().getMonth()+1}月${new Date().getDate()}日`;
    if (tweetDate === now) {
        return `${HH}時${mm}分`;
    } else {
        return `${MM}月${dd}日`;
    }
}

const Post = forwardRef(( { displayName, userName, verified, timestamp, text, avatar, image }, ref ) => {
  return (
    <div className='post' ref={ref}>
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
                            @{userName} - {timestampToTime(timestamp)}
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
});

export default Post;