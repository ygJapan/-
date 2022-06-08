import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';

function Timeline() {
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
            </div>


    </div>
  )
}

export default Timeline