class List {
  createNewToDo() {
    let newToDoBlock = document.createElement('div');
    newToDoBlock.classList.add('newTask');

    return newToDoBlock;
  }
}

let list = new List();