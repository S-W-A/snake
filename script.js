window.addEventListener('DOMContentLoaded', () => {
  const sq = document.querySelector('.square');
  let posX = 0;
  let posY = 0;
  let dir;
  let id;


  // function setInt() {
  //   pos++;
  //   sq.style.top = pos + 'px';
  //   sq.style.left = pos + 'px';
  //   if (pos === 450) {
  //     clearInterval(id);
  //   }
  // }
  function setInt(dir, t) {
    id = setInterval(dir, t);
  }

  function clearInt() {
    if (dir == 'x') {
      if (posX === 450 || posX === 0) {
        clearInterval(id);
      }
    } else if (dir == 'y') {
      if (posY === 450 || posY === 0) {
        clearInterval(id);
      }
    }
  }

  function moveUp() {
    dir = 'y';
    posY--;
    sq.style.top = posY + 'px';
    clearInt();
  }

  function moveRight() {
    dir = 'x';
    posX++;
    sq.style.left = posX + 'px';
    clearInt();
  }

  function moveDown() {
    dir = 'y';
    posY++;
    sq.style.top = posY + 'px';
    clearInt();
  }

  function moveLeft() {
    dir = 'x';
    posX--;
    sq.style.left = posX + 'px';
    clearInt();
  }
  document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowUp') {
      if (posY !== 0) {
        clearInterval(id);
        setInt(moveUp, 5);
      }
    } else if (e.code == 'ArrowRight') {
      if (posX !== 450) {
        clearInterval(id);
        setInt(moveRight, 5);
      }
    } else if (e.code == 'ArrowDown') {
      if (posY !== 450) {
        clearInterval(id);
        setInt(moveDown, 5);
      }
    } else if (e.code == 'ArrowLeft') {
      if (posX !== 0) {
        clearInterval(id);
        setInt(moveLeft, 5);
      }
    }
  });
  sq.addEventListener('click', () => {

  });


});