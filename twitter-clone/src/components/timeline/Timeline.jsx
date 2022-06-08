import React, { useEffect, useState } from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from '../../firebase';
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';


function Timeline() {
  const [ posts, setPosts] =useState([]);

  useEffect(()=>{
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    onSnapshot(q, (QuerySnapshot) => {
      setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    });

  },[]);

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
              <FlipMove>
                {posts.map((post)=> (
                  <Post
                    key={post.id}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    timestamp={post.timestamp}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                  />
                ))}
              </FlipMove>
            </div>


    </div>
  )
}

export default Timeline