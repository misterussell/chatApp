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
    $('.messages').hide();
    $('.messageBlock').hide();
    renderLogin(session);

  },

  renderChat: () => {
    $('.messages').show();
    $('.messageBlock').show();
    $('.logoBlock').empty();
    renderMessenger(session);
    // renderChat(session);
    let chatRefresh = window.setInterval(function() {
      renderChat(session);
    }, 1000);
  }
});

var router = new Router(session);

export default router;
