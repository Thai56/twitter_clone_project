$(document).ready(function(){
  var charCount;
  var myName = 'Thai'
  var myTweetName = '@forloop'
  $('#tweet-controls').addClass('hide');
  $('ul').addClass('hide');
  $('.stats').addClass('hide')

// TWEET_CONTROLS HIDDEN
// ==============================================
  $('.tweet-compose').on('click',function(){
    $(this).addClass('double')
    $('#tweet-controls').removeClass('hide')
  })
  // TEXT AREA
  // ===============================================
  $('.tweet-compose').on('keyup',function(){
    var charCount = 140 - $(this).val().length;
    // console.log($(this).val())
    $('#char-count').text(charCount)
    if(charCount<=10){
      $('#char-count').css('color','red')
    }
    else if(charCount>10){
      $('#char-count').css('color','#999')
    }
    if(charCount <=0){
      // console.log('this button is disabled')
      $('#tweet-submit').attr('disabled','disabled');
    }
    else {
      $('#tweet-submit').removeAttr('disabled','disabled');
      // console.log('button working again')
    }
    // console.log(charCount)
    return charCount;
  })
  // SUBMIT TO PREPEND
  // =============================================
  $('#tweet-submit').on('click',function() {
    var text= $(".tweet-compose").val();
    // console.log(text)
    $('#stream').prepend('<div class="tweet">'+
    '<div class="content">'+
    '<img class="avatar" src="http://127.0.0.1:64327/WEEK_2/day5_jQuery2/twitter-clone/img/alagoon.jpg">'+
    '<strong class="fullname">'+myName+'</strong>'+
    '<span class="username">'+myTweetName+'</span>'+
    '<div class="tweet-text-spill-container">'+
    '<p class="tweet-text">'+text+'</p>'+
    '</div>'+
    '<div class="tweet-actions">'+
    '<ul>'+
    '<li><span class="icon action-reply"></span> Reply</li>'+
    '<li><span class="icon action-retweet"></span> Retweet</li>'+
    '<li><span class="icon action-favorite"></span> Favorite</li>'+
    '<li><span class="icon action-more"></span> More</li>'+
    '</ul>'+
    '</div>'+
    '<div class="stats">'+
    '<div class="retweets">'+
    '<p class="num-retweets">30</p>'+
    '<p>RETWEETS</p>'+
    '</div>'+ //retweets class
    '<div class="favorites">'+
    '<p class="num-favorites">6</p>'+
    '<p>FAVORITES</p>'+
    '</div>'+   //div class favorites
    '<div class="users-interact">'+
    '<div>'+    //div around images at bottom (2x)
    '<img src="http://127.0.0.1:64327/WEEK_2/day5_jQuery2/twitter-clone/img/damenleeturks.jpg" />'+
    '<img src="http://127.0.0.1:64327/WEEK_2/day5_jQuery2/twitter-clone/img/jennyshen.jpg" />'+
    '</div>'+  //div around images at bottom (2x)
    '</div>'+   // users interact div
    '<div class="time">'+ '1:04 PM - 19 Sep 13' +
    '</div>'+  //div class time
    '</div>'+  // div class stats
    '<div class="reply">'+
    '<img class="avatar" src="img/alagoon.jpg" />'+
    '<textarea class="" placeholder="Reply to @forloop"/></textarea>'+
    '</div>'+  //div class reply
    '</div>'+
    '</div>'+
    '</div>')  //div tweet
    // STREAM APPEND
    // ===============================================
    $('.stats').addClass('hide')
  })
  // $(document).on('mouseenter','#main', function(){
  //   $('ul').animate({'opacity':'show', width:'toggle'},800)
  //   $('.stats').animate({'opacity': 'show', height:'toggle'}, 800)
  // })
  // $(document).on('mouseleave','#main', function(){
  //   $('ul').stop().animate({'opacity':'show', width:'toggle'},800)
  //   $('.stats').animate({'opacity': 'show', height:'toggle'}, 800)
  // })
  $(document).on('mouseenter','#main', function(){
    $(this).find('ul').animate({'opacity':'show', width:'toggle'},800)
    $('.stats').animate({'opacity': 'show', height:'toggle'}, 800)
  })
  $(document).on('mouseleave','#main', function(){
    $(this).find('ul').stop().animate({'opacity':'show', width:'toggle'},800)
    $('.stats').animate({'opacity': 'show', height:'toggle'}, 800)
  })

// $('#main').on('mouseenter', function(){
//   $(this)
// })





})
