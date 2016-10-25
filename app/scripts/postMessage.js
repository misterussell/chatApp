import $ from 'jquery';
import Message from './Message';
import session from './login';

function renderMessenger (session) {
  // console.log(session);
  let messageBlock = $('.messageBlock');

  let newMessage = `
  <form class="newMessage">
    <input type="textarea" class="textArea" placeholder="New message..." value="">
    <input type="submit" class="postMessage" value="Post Message">
  </form>
  `;

  messageBlock.append(newMessage);

  $('.newMessage').find('.postMessage').on('click', function(e){
    e.preventDefault();
    let timeStamp = Date();
    let body = $('.textArea').val();
    let newPost = new Message(session.userName, body, timeStamp);
    newPost.save(newPost);
  });
}

export default renderMessenger;
