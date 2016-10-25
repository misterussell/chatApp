import $ from 'jquery';
import moment from 'moment';

import Message from './Message';
import renderMessenger from './postMessage';
import session from './login';

function renderChat(session) {
  console.log('CHAT RENDERED CLETUS');
  let chatBlock = $('.chatBlock');
  chatBlock.empty();
  let messageArea = `
    <ul class="messages">
    </ul>
  `;

  chatBlock.append(messageArea);

  var settings = {
  		url: 'http://tiny-za-server.herokuapp.com/collections/maxchat',
  		type: 'GET',
  		success: function(data, status, xhr) {
  			data.forEach(function(message, i, arr) {
          let messageLine = $(`
            <li>
              <span class="postDetails">${message.userName} (${message.timeStamp}):</span>
              <span class="postBody">${message.body}</span>
            </li>`);

          $('.messages').prepend(messageLine);

          if(message.userName === session.userName) {
            console.log(session.userName);
                messageLine.append(`
                  <button class="delete ${message._id}">
                    Delete
                  </button>`);
          }
          $('.' + message._id).on('click', (e) => {
            let target = new Message(message.userName, message.body, message.timeStamp, message._id);
            console.log(target);
            target.delete();
          });
  			});
  		},
  		error: function() {
  			console.log('Chat log request:FAIL');
  		}
  	};
	$.ajax(settings);

}

export default renderChat;
