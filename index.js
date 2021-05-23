class ToDo {
  constructor() {
    let sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', () => {
      this.sendMessage();
    });
  }

  sendMessage() {
    let messageHistoryBlock = document.getElementById('toDoHistory');
    let inputElement = document.getElementById('msg');

    let messageBlock = this.createMessageBlock({ text: inputElement.value });
    messageHistoryBlock.appendChild(messageBlock);
  }

  getInputMessage() {
    let inputElement = document.getElementById('msg');
    let inputValue = inputElement.value;
    inputElement.value = '';
    return inputValue;
  }

  createMessageBlock(params) {
    let messageBlock = document.createElement('div');
    messageBlock.classList.add('message');

    let messageDateBlock = this.createMessageDateBlock();
    messageBlock.appendChild(messageDateBlock);

    let checkBlock = this.createCheckBlock();
    messageBlock.appendChild(checkBlock);

    let messageTextBlock = this.createMessageTextBlock(params.text);
    messageBlock.appendChild(messageTextBlock);
    
    return messageBlock;
  }

  createMessageDateBlock() {
    let messageDateBlock = document.createElement('span');
    messageDateBlock.classList.add('date');
    messageDateBlock.textContent = '23.05.21';

    return messageDateBlock;
  }

  createCheckBlock() {
    let checkBlock = document.createElement('input');
    // Як створити саме чекбокс інпут для відмітки виконаних завдань?
    checkBlock.classList.add('checkIcon');

    return checkBlock;
  }

  createMessageTextBlock(text) {
    let messageTextBlock = document.createElement('p');
    messageTextBlock.textContent = text;

    return messageTextBlock;
  }
  deleteMessageBlock() {
    let removeButton = document.getElementById('clear');
    removeButton.addEventListener('click', () => {
      createMessageBlock.remove();
    });
    return removeButton;
  }
}

let chat = new ToDo();