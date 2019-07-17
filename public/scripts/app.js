$(document).ready(function() {

const errorTextInput = function(counter) {
  $('.errorBox').empty();
  let conditionalText = "";
  if (counter > 140) {
    conditionalText = `Too long! Please respect our arbitrary limit of 140 chars. #kthxbye`
  } else if (counter === 0 || counter === null) {
    conditionalText = `Please type something! Empty tweets are not allowed. #kthxbye`
  }
  let $error = $('<div>').addClass('errorBox')
  $error.html(`
    <article class="error">
      <div class="errorText">
        <img id="danger1" src="https://img.icons8.com/clouds/100/000000/error.png">
          ${conditionalText}
        <img id="danger2" src="https://img.icons8.com/clouds/100/000000/error.png">
       </div>
    </article>
  `)
  $('.container').prepend($error);
}

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
  for (let i of tweets) {
    const tweet = createTweetElement(i);
    $('.tweets').prepend(tweet);
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

$.ajax('/tweets', { method: 'GET' }).then(renderTweets);

const $submit = $('form');
$submit.on('submit',(event) => {
  console.log('Button clicked, performing ajax call...');
  event.preventDefault();
  // read the text counter
  let counter = $("#inputText").val().trim().length;
  if (counter > 140 || counter === 0 || counter === null) {
    errorTextInput(counter);
    return false;
  }
  //
  $.post('/tweets', $submit.serialize(), () => {
    $('.errorBox').empty();
    $.ajax('/tweets', { method: 'GET' }).then(renderTweets);
  })
});


});