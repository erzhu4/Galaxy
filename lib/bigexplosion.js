(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }


	var BigExplosion = Galaxy.BigExplosion = function (pos, game) {
		this.game = game;
		this.pos = pos;
		this.sprite = new Image();
		this.sprite.src = "./images/explosion.png";
		this.dem = 40;
	};

	BigExplosion.prototype.move = function () {
		if (this.dem > 480) {
			this.sprite.src = "";
		} else {
			this.dem += 40;
			this.pos[0] -= 20;
			this.pos[1] -= 20;
		}
	};

	BigExplosion.prototype.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
	};

	BigExplosion.prototype.isCollidedWith = function (obj) {
		return false;
	};


 })();
