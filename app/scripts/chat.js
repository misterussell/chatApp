import $ from 'jquery';
import moment from 'moment';

import Message from './Message';
import renderMessenger from './postMessage';
import session from './login';

function renderChat(session) {
  console.log('CHAT RENDERED CLETUS');
  // let messageArea = `
  //   <ul class="messages">
  //   </ul>
  // `;

  // chatBlock.append(messageArea);
  var settings = {
  		url: 'http://tiny-za-server.herokuapp.com/collections/maxchat',
  		type: 'GET',
  		success: (data, status, xhr) => {
        // chatBlock.empty();
        $('.messages').empty();
        $('.messages').scrollTop = $('.messages').scrollHeight;
  			data.forEach(function(message, i, arr) {
          let messageLine = $(`
            <li class=>
              <span class="postDetails">${message.userName} (${moment(message.timeStamp).format('DD/MM/YY, h:mm a')}):</span>
              <span class="postBody">${message.body}</span>
            </li>`);

          $('.messages').prepend(messageLine);
          if(message.userName === session.userName) {
            console.log(session.userName);
            messageLine.append(`
              <button class="delete ${message._id}">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>`);
          }
          $('.' + message._id).on('click', (e) => {
            let target = new Message(message.userName, message.body, message.timeStamp, message._id);
            console.log(target);
            target.delete();
          });
        });
  		},
  		error: () => {
  			console.log('Chat log request:FAIL');
  		}
  	};
	$.ajax(settings);

}

export default renderChat;
