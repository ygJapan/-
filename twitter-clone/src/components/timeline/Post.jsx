import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import "./Post.css";

function Post() {
  return (
    <div className='post'>
        {/* ツイート主アイコン */}
        <div className='post_avatar'>
            <Avatar />
        </div>

        {/* アイコン以外 */}
        <div className='post_body'>

            {/* 名前からtweet内容まで */}
            <div className='post_header'>

                {/* 名前とID */}
                <div className='post_headerText'>
                    <h3>プログラミングチュートリアル
                        <span className='post_headerSpecial'>
                            <VerifiedUserIcon className='post_badge' />
                            @YgJapan
                        </span>
                    </h3>
                </div>

                {/* ツイート内容 */}
                <div className='post_headerDescription'>
                    <p>ReactでTwitterクローンを作ってみた</p>
                </div>
            </div>

            {/* 画像 */}
            <img src="https://source.unsplash.com/random" />

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