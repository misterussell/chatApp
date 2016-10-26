import $ from 'jquery';
import Session from './Session';

function renderLogin(session) {
  let logoBlock = $('.logoBlock');
  // let chatBlock = $('.chatBlock');
  let logoImage = `<img src="assets/images/burt.png" /img>`;
  let logoText = `<h1>Burt Bacha-Chat</h1>`;
  let userForm = `
    <form class="newUser">
      <input type="text" class="userInput" value="">
      <input type="submit" class ="login" value="Join Chat">
    </form>
  `;
  // location.hash = '';
  logoBlock.append(logoImage, logoText, userForm);
  // chatBlock.append(userForm);

  let newUser = $('.newUser');

  newUser.find('.login').on('click', function(e) {
    e.preventDefault();
    let user = newUser.find('.userInput').val();
    console.log(user);
    if (user !== '') {
      session.userName = user;
      location.hash = '#chat';
      return session;
    } else {
      alert('Please consider a valid login.');
    }
  });

}

export default renderLogin;
