// THIS SOURCE CODE IS FOR EDUCATIONAL PURPOSES ONLY
// DO NOT USE THIS ONLINE BEFORE READING TWITTER'S PRIVACY POLICY

var TwitterPackage = require('twitter');

var secret = {
  consumer_key: '<YOUR CONSUMER KEY>',
  consumer_secret: '<YOUR SECRET CONSUMER KEY>',
  access_token_key: '<ACCESS TOKEN KEY>',
  access_token_secret: '<ACCESS TOKEN KEY>'
}
var Twitter = new TwitterPackage(secret);
const express=require("express");
const bodyParser = require("body-parser");

Twitter.stream('statuses/filter', {track: '#google'}, function(stream) {
  stream.on('data', function(tweet) {
    
  //NEVER USE THE SAME SENTENCE TWICE! BE CREATIVE! TWITTER DOES NOT ALLOW DUPLICATES
   console.log(tweet.text);
    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", I developed Python opensource programs."}
    //Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){
    //  if(error){
    //    console.log(error);
    //  }
    //  console.log(tweetReply.text);
   // });
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});
