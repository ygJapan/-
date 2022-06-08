import React, { useState } from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

function Timeline() {

  const [ posts, setPosts] =useState([]);

  const postData = collection(db, "posts");
  getDocs(postData).then((QuerySnapshot) => {
    setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
  });
  // postData.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  return (
    <div className='timeline'>
        {/* ヘッダー */}
            <div className='timeline_header'>
                <h2>ホーム</h2>
            </div>
        {/* ツイートボックス */}
            <div>
              <TweetBox />
            </div>

        {/* ポスト */}
            <div>
              {posts.map((post)=> (
                <Post
                  displayName={post.displayName}
                  userName={post.userName}
                  verified={post.verified}
                  text={post.text}
                  avatar={post.avatar}
                  image={post.image}
                />
              ))}
            </div>


    </div>
  )
}

export default Timeline