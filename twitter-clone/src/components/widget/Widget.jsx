import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';


function Widget() {
  return (
    <div className='widget'>
      <div className='widget_input'>
        <SearchIcon className='widget_seachIcon'/>
        <input placeholder='キーワード検索' type='text'/>
      </div>

      <div className='widget_container'>
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed
          tweetId={'1425338261715652608'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ReactNativeJP"
          options={{height: 400}}
        />

        <TwitterShareButton
          url={'https://github.com/ygJapan'}
          options={{ text: '#reactjs is awesome', via: 'reactjs' }}
        />

      </div>
    </div>
  )
}

export default Widget