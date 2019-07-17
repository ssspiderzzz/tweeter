$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
for (let i of tweets) {
  const tweet = createTweetElement(i);
  $('.tweets').append(tweet);
}
}

const createTweetElement = function(tweet) {
let $tweet = $('<article>').addClass('tweet');
$tweet.html(`
    <div class="avatarNameHandle">
            <img class="avatar" src="${tweet.user.avatars}">
            <span class="userName">${tweet.user.name}</span>
            <span class="userHandle">${tweet.user.handle}</span>
    </div>
    <hr />
      <div class="tweetContent">${tweet.content.text}</div>
      <div class="border"></div>
      <footer class="tweetTime">${new Date(tweet.created_at)}</footer>
    <footer class="tweetIcon">
      <img id="flag" height="30" width="30" src="https://img.icons8.com/officel/16/000000/flag.png"></img>
      <img id="refresh" height="30" width="30" src="https://img.icons8.com/officexs/16/000000/repeat.png"></img>
      <img id="like" height="30" width="30" src="https://img.icons8.com/ultraviolet/40/000000/like.png"></img>
    </footer>

`)
return $tweet;
}

renderTweets(data);

});