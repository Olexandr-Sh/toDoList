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

    // let removeBtn = this.deleteMessageBlock();
    // messageBlock.appendChild(removeBtn);

    let checkBlock = this.createCheckBlock();
    messageBlock.appendChild(checkBlock);

    let messageTextBlock = this.createMessageTextBlock(params.text);
    messageBlock.appendChild(messageTextBlock);
    
    return messageBlock;
  }

  createMessageDateBlock() {
    let messageDateBlock = document.createElement('span');
    messageDateBlock.classList.add('date');
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let fullDate = month + '.' + day + '.' + year;
    messageDateBlock.textContent = '23.05.21';

    return messageDateBlock;
  }

  createCheckBlock() {
    let checkBlock = document.createElement('input');
    checkBlock.type = 'checkbox';
    checkBlock.value = 'value';
    checkBlock.id = 'id';
    checkBlock.classList.add('checkIcon');
    // checkBlock.addEventListener('click', function () {
    //   this.text.style.textDecoration = 'line-through';
    // });
    return checkBlock;
  }
  createMessageTextBlock(text) {
    let messageTextBlock = document.createElement('p');
    messageTextBlock.textContent = text;
    messageTextBlock.addEventListener('click', function () {
      messageTextBlock.style.textDecoration = 'line-through';
    });
    return messageTextBlock;
  }
  
  deleteMessageBlock() {
    let removeBtn = document.createElement('span');
    removeBtn.textContent = text;
    removeBtn.classList.add('icon-bin');
    
    // removeButton.addEventListener('click', () => {
    //   createMessageBlock.remove();
    // });
    return removeBtn;
  }
}

let chat = new ToDo();