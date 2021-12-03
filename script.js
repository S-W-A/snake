window.addEventListener('DOMContentLoaded', () => {
  const sq = document.querySelector('.square');
  let posX = 0;
  let posY = 0;
  let id;

  
  // function setInt() {
  //   pos++;
  //   sq.style.top = pos + 'px';
  //   sq.style.left = pos + 'px';
  //   if (pos === 450) {
  //     clearInterval(id);
  //   }
  // }
  function setInt(dir) {
    id = setInterval (dir, 5);
  }
  function clearInt() {
    if (posY === 450 || posY === 0) {
      clearInterval(id);
    }
  }
  function moveUp() {
    posY--;
    sq.style.top = posY + 'px';
    clearInt();
  }
  function moveRight() {

  }
  function moveDown() {
    posY++;
    sq.style.top = posY + 'px';
    if (posY === 450 || posY === 0) {
      clearInterval(id);
    }
  }
  function moveLeft() {}
  document.addEventListener('keydown', (e) => {    
    if (e.code == 'ArrowDown') {
      
      setInt(moveDown);
    } else if (e.code == 'ArrowUp') {
      setInt(moveUp);
    }
  });
  sq.addEventListener('click', () => {
    
  });


});