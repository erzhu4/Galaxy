(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }


	var Puff = Galaxy.Puff = function (pos, game) {
		this.game = game;
		this.pos = pos;
		this.sprite = new Image();
		this.sprite.src = "./images/puff.png";
		this.dem = 10;
	};

	Puff.prototype.move = function () {
		if (this.dem > 60) {
			this.sprite.src = "";
		} else {
			this.dem += 20;
			this.pos[0] -= 10;
			this.pos[1] -= 10;
		}
	};

	Puff.prototype.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
	};

	Puff.prototype.isCollidedWith = function (obj) {
		return false;
	};


 })();
