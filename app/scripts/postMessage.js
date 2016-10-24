import $ from 'jquery';
import Message from './Message';

function renderMessenger (session) {
  console.log(session);
  let chatBlock = $('.chatBlock');

  let newMessage = `
  <form class="newMessage">
    <input type="textarea" class="textArea" placeholder="New message..." value="">
    <input type="submit" class="postMessage" value="Post Message">
  </form>
  `;

  chatBlock.append(newMessage);

  $('.newMessage').find('.postMessage').on('click', function(e){
    e.preventDefault();
    let body = $('.textArea').val();
    let newPost = new Message(session.userName, body);
    newPost.save(newPost);
}

export default renderMessenger;
