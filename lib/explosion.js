(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }


	var Explosion = Galaxy.Explosion = function (pos, game) {
		this.game = game;
		this.pos = pos;
		this.sprite = new Image();
		this.sprite.src = "./images/explosion.png";
		this.dem = 20;
	};

	Explosion.prototype.move = function () {
		if (this.dem > 120) {
			this.sprite.src = "";
		} else {
			this.dem += 20;
			this.pos[0] -= 10;
			this.pos[1] -= 10;
		}
	};

	Explosion.prototype.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
	};

	Explosion.prototype.isCollidedWith = function (obj) {
		return false;
	};


 })();
