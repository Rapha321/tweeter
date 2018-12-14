/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  // const tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": {
  //       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // }


// function createTweetElement(obj) {

//   return `
//     <article class="indiv-tweets">
//       <header>
//         <img class="image" src=${obj.user.avatars.small}>
//         <span class="name">${obj.user.name}</span>
//         <span class="handle">${obj.user.handle}</span>
//       </header>

//       <div class="body">
//         <p>${obj.content.text}</p>
//       </div>

//       <footer>
//         <span>${obj.created_at}</span>
//         <div class="animation">
//           <i class="fa fa-flag" aria-hidden="true"></i>
//           <i class="fa fa-retweet" aria-hidden="true"></i>
//           <i class="fa fa-heart" aria-hidden="true"></i>
//         </div>
//       </footer>
//     </article>
// `;
// }

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


function renderTweets(tweets) {
  for (let id of tweets) {
    $("#unique").prepend(createTweetElement(id));
  }
}

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

// $(document).ready(function() {
//   renderTweets(data);
// });


// $(document).ready(function() {
//   var $tweet = createTweetElement(tweetData);
//   console.log($tweet)

//   $(".container").append($tweet);
// });

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

  // $( '.new-tweet' ).hide();
  $( '.large-button' ).click(function() {
    $( '.new-tweet' ).slideToggle('fast');
  });



});























