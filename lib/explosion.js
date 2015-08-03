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
    Galaxy.ExpandingObject.call(this);
	};

  Galaxy.Util.inherits(Explosion, Galaxy.ExpandingObject);

	Explosion.prototype.move = function () {
		if (this.dem > 120) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 10;
			this.pos[1] -= 10;
		}
	};


 })();
