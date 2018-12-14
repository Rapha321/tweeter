

// added cross-site scripting to avoid evaluating text from untrusted sources
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// loop through tweet database and prepend to original tweet
function renderTweets(tweets) {
  for (let idiv of tweets) {
    $("#unique").prepend(createTweetElement(idiv));
  }
}

// setting the format of how tweet box should looks like
function createTweetElement(obj) {
  let article = `<article class="indiv-tweets">
      <header>
        <img class="image" src=${escape(obj.user.avatars.small)}>
        <span class="name">${escape(obj.user.name)}</span>
        <span class="handle">${escape(obj.user.handle)}</span>
      </header>

      <div class="body">
        <p>${escape(obj.content.text)}</p>
      </div>

      <footer>
        <span>${moment(obj.created_at).fromNow()}</span>
        <div class="animation">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>`
  let $tweet = $(article).addClass('tweet');
  return $tweet;
}

// this will make sure that
$(document).ready(function() {
  let loadTweets = function() {
    $.ajax("/tweets", {method: 'GET'})
    .then(function (tweets) {
      renderTweets(tweets);
    })
  }
  loadTweets()

  var $submitTweet = $('.submitTweet');
  $submitTweet.submit(function (event) {
      event.preventDefault();
      let $tweetContent = $(this);
      let submitable = checkTweet();

      if (submitable) {
        $.ajax('/tweets', {
          method: 'POST',
          data: $tweetContent.serialize()
        })
        .done(function() {
          loadTweets();
          $('.textArea').val("");
          $('.counter').text("140");
        })
      }
  });

  const checkTweet = function () {
    let checkTextarea = $('.textArea').val();
    if (checkTextarea === "" || checkTextarea === null) {
      $('.errorBlank').css('display', 'block');
      return false;
    } else if (checkTextarea.length > 140) {
      return false;
    } else {
      return true;
    }
  }


  $( '.new-tweet' ).hide();
  $( '.large-button' ).click(function() {
    $( '.new-tweet' ).slideToggle('fast');
  });

$('.large-button').on('click', function() {
  $('.textArea').focus()
})

});























