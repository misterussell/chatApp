//Constructor for a messages

function Message(userName, body) {
	'use strict';
  this.timeStamp = new Date();
	this.userName = userName;
  this.body = body;
  this.save = function() {

  };
  this.delete = function() {

  };
	return this;
}

Message.prototype.save = function(newPost) {
  let settings = {
    url: 'http://tiny-za-server.herokuapp.com/collections/maxchat',
    type: 'POST',
    success: function(data, status, xhr) {
      console.log('successful');
    },
    error: function() {
    // log an error
      console.log('the post didn\'t work');
    },
    contentType: 'application/json',
    data: JSON.stringify(newPost)
  };
  console.log(newPost);
  $.ajax(settings);
}

export default Message;
