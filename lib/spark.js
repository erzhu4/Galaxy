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
    Galaxy.ExpandingObject.call(this);
	};

    Galaxy.Util.inherits(Spark, Galaxy.ExpandingObject);

	Spark.prototype.move = function () {
		if (this.dem > 60) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 5;
			this.pos[1] -= 5;
		}
	};


 })();
