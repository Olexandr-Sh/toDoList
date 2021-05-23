// class List {
//   attachTask() {
//     let toDoElementsBlock = document.getElementsByClassName(toDoElements);
//     let newToDoBlock = this.createNewToDo();
//     toDoElementsBlock.appendChild(newToDoBlock);
//   }
//   createNewToDo() {
//     let newToDoBlock = document.createElement('div');
//     newToDoBlock.classList.add('newTask');
    
//     let listDateBlock = this.createListDateBlock();
//     listDateBlock.appendChild(createNewToDo);
    
//     return newToDoBlock;
//   }

//   createListDateBlock() {
//     let listDateBlock = document.createElement('span');
//     listDateBlock.classList.add('date');
//     listDateBlock.textContent - '23.05.21';

//     return listDateBlock;
//   }
// }

// let list = new List();

let clear = document.querySelector('.clear');

let dateElement = document.getElementById('date');

let list = document.getElementById('list');

let input = document.getElementById('input');