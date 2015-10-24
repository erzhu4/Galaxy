(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var GameView = Galaxy.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.timerId = null;
  };


  GameView.prototype.bindKeyHandlers = function () {
      var ship = this.ship;
      // a
      $(document).on("keydown", function (event) {
		  console.log("keydown");
        // a
        event.preventDefault();
        if (event.keyCode === 37 || event.keyCode === 65){
          ship.power([-1, 0]);
        }
        //d
        if (event.keyCode === 39 || event.keyCode === 68){
          ship.power([1, 0]);
        }

        if (event.keyCode === 32 || event.keyCode === 80){
          ship.fireBullet();
        }
      });

    $(document).on("keyup", function (event) {
      event.preventDefault();
	  console.log("keyup");
      if (event.keyCode === 37 || event.keyCode === 65){
        if (ship.vel[0] < 0) {ship.slowDown();}
      }
	  if (event.keyCode === 39 || event.keyCode === 68 ){
        if (ship.vel[0] > 0) {ship.slowDown();}
      }
    });
  };

  GameView.prototype.start = function () {
    $(".game-over").addClass("hide");
	 $(".galaxy-score").html(0);
    this.game = new Galaxy.Game();
    this.ship = this.game.addShip();
    var gameView = this;
    this.stop();
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000 / Galaxy.Game.FPS
    );

    this.bindKeyHandlers();
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
