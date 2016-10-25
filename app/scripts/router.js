import $ from 'jquery';
import Backbone from 'backbone';

import renderLogin from './login';
import renderChat from './chat';
import renderMessenger from './postMessage';
import Session from './Session';

let session = new Session();

const Router = Backbone.Router.extend({

  routes: {
    ""      :  "renderLogin",
    "chat"  :  "renderChat",
  },

  renderLogin: () => {
    renderLogin(session);
  },

  renderChat: () => {
    $('.chatBlock').empty();
    $('.logoBlock').empty();
    $('.messageBlock').empty();
    renderChat(session);
    renderMessenger(session);
    // window.clearTimeout(timeoutID);
    // window.clearTimeout(chatRefresh);
    // const chatRefresh = window.setInterval(function() {
    //   renderChat();
    // }, 1000);
  }
});

var router = new Router(session);

export default router;
