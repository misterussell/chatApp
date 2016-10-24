//library imports
import $ from 'jquery';

//self scripted module imports
import Session from './Session';
import Message from './Message';
import renderLogin from './login';
import renderChat from './chat';
import renderMessenger from './postMessage';

let session = new Session();

$(document).ready(renderLogin(session));

function handleHashChange(e) {
  let location = window.location.hash;
	if (location === '') {
		// put the form on the page
		renderLogin();
	} else if (location === '#chat'){
    $('.logoBlock').empty();
    $('.chatBlock').empty();
		renderChat();
    renderMessenger(session);
  }
}

$(window).on('hashchange', handleHashChange);
