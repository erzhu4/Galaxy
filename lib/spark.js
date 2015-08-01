(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }


	var Spark = Galaxy.Spark = function (pos, game) {
		this.game = game;
		this.pos = pos;
		this.sprite = new Image();
		this.sprite.src = "./images/spark.png";
		this.dem = 10;
	};

	Spark.prototype.move = function () {
		if (this.dem > 60) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 5;
			this.pos[1] -= 5;
		}
	};

	Spark.prototype.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
	};

	Spark.prototype.isCollidedWith = function (obj) {
		return false;
	};


 })();
