import $ from 'jquery';

//Constructor for a messages

function Message(userName, body, time, id) {
	'use strict';
	this.userName = userName;
  this.body = body;
	this.timeStamp = time;
	this._id = id;
	return this;
}

Message.prototype.save = function(newPost) {
  let postSettings = {
    url: 'http://tiny-za-server.herokuapp.com/collections/maxchat',
    type: 'POST',
    success: (data, status, xhr) => {
      console.log('successful');
    },
    error: () => {
    // log an error
      console.log('the post didn\'t work');
    },
    contentType: 'application/json',
    data: JSON.stringify(newPost)
  };
  console.log(newPost);
  $.ajax(postSettings);
};

Message.prototype.delete = function() {
	console.log('I WILL DELETE YOU CLETUS');
	let id = this._id;
	console.log(id);
	let deleteSettings = {
		url: 'http://tiny-za-server.herokuapp.com/collections/maxchat/' + id,
		type: 'DELETE',
		success: (data, status, xhr) => {
			console.log('Post deleted.');
		},
		error: () => {
			console.log('Did not delete');
		}
	};
	$.ajax(deleteSettings);
};

export default Message;
