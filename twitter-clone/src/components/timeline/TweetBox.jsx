import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../firebase';
import { v4 as uuid } from 'uuid';

function TweetBox() {
  const [ tweetMessage, setTweetMessage ] = useState("");
  const [ tweetImage, setTweetImage ] = useState("");

  const handleTweet = (e) => {
  // firebaseのデータベースにデータを追加する
  e.preventDefault();

  addDoc(collection(db, "posts"), {
    id: uuid(),
    displayName: "わいじージャパン",
    userName: "YgJapan",
    verified: true,
    text: tweetMessage,
    avatar: "https://1.bp.blogspot.com/--6-JiW_88ts/X1CK45ov1mI/AAAAAAABavs/SdToo6Tz2SQ43pPQHpbzg4kwsdwSv7GhQCNcBGAsYHQ/s1600/dog_great_pyrenees.png",
    image: tweetImage,
    timestamp: serverTimestamp(),
  });

  setTweetMessage("");
  setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar />
                <input
                  placeholder='いまどうしてる？'
                  type="text"
                  onChange={(e) => setTweetMessage(e.target.value)}
                  value={tweetMessage}
                />
            </div>
            <input
              className='tweetBox_imageInput'
              placeholder='画像のURLを入力してください'
              type="text"
              onChange={(e) => setTweetImage(e.target.value)}
              value={tweetImage}
            />
            <Button className='tweetBox_tweetButton' type="submit" onClick={handleTweet}>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox