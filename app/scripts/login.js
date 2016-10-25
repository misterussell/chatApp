import $ from 'jquery';
import Session from './Session';

function renderLogin(session) {
  let logoBlock = $('.logoBlock');
  let chatBlock = $('.chatBlock');
  let logoImage = `<img src="http://www.fillmurray.com/200/200" /img>`;
  let logoText = `<h1>Burt Bacha-Chat</h1>`;
  let userForm = `
    <form class="newUser">
      <input type="text" class="userInput" value="">
      <input type="submit" name="name" class ="login" value="Join Chat">
    </form>
  `;
  // location.hash = '';
  logoBlock.append(logoImage, logoText);
  chatBlock.append(userForm);

  let newUser = $('.newUser');

  newUser.find('.login').on('click', function(e) {
    e.preventDefault();
    let user = newUser.find('.userInput').val();
    session.userName = user;
    // console.log(user);
    // console.log(session);
    location.hash = '#chat';
    return session;
  });

}

export default renderLogin;
