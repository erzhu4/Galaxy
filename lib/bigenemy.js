(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var BigEnemy = Galaxy.BigEnemy = function (options) {
  	this.hp = 20;
    var sprite = new Image();
    sprite.src = "./images/battlecruiser.png";
    options.pos = [50 + Math.random() * 0.75 * Galaxy.Game.DIM_X, 1];
    options.radius = 100;
    options.vel = [0, 2];
    options.dem = 250;
    options.sprite = sprite;
    Galaxy.MovingObject.call(this, options);
  };

  Galaxy.Util.inherits(BigEnemy, Galaxy.MovingObject);

  	BigEnemy.prototype.move = function () {
		this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

		if (this.hp < 1){
      this.game.addBigExplosion(this.pos);
			this.game.remove(this);
		}
		if (this.game.isOutOfBounds(this.pos)) {
			  this.game.remove(this);
		  }
	};

  BigEnemy.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Galaxy.Ship) {
      $(".game-over").removeClass("hide");
      this.game.remove(otherObject);
    }
  };

 })();
