import $ from 'jquery';

function renderChat() {
  let chatBlock = $('.chatBlock');

  let messageArea = `
    <div class="messages">
    </div>
  `;

  chatBlock.append(messageArea);

}

export default renderChat;
