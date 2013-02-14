
function setGameBoard() {
	canvas = document.getElementById('simple');
    if (canvas.getContext) {
   	   ctx = canvas.getContext('2d');
   	   gameboard = new Image();
   	   gameboard.src = 'pacman10-hp-sprite.png';
   	   ctx.drawImage(gameboard, 322, 0, 464, 138, 0, 0, 464, 138);
       ctx.drawImage(gameboard, 80, 0, 19, 19, 30, 4, 19, 19);
       ctx.drawImage(gameboard, 1, 161, 20, 20, 10, 5, 20, 20);
   }
   else {
       alert('Sorry, canvas is not supported on your browser!');
   }
}
