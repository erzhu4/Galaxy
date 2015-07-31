(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var BigEnemy = Galaxy.BigEnemy = function (options) {
  	this.game = options.game;
  	this.hp = 15;
    var sprite = new Image();
    sprite.src = "./images/enemy.gif";
    this.pos = [50 + Math.random() * 0.75 * Galaxy.Game.DIM_X, 1];
    this.radius = 100;
    this.vel = [0, 2];
    this.dem = 250;
    this.sprite = sprite;
  };

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

	BigEnemy.prototype.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos[0] - this.dem / 2, this.pos[1] - this.dem / 2, this.dem, this.dem);
	};

	BigEnemy.prototype.isCollidedWith = function (obj) {
		return false;
	};

 })();
