(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }


	var BigExplosion = Galaxy.BigExplosion = function (pos, game) {
		this.game = game;
		this.pos = pos;
		this.sprite = new Image();
		this.sprite.src = "./images/bigexplosion.gif";
		this.dem = 80;
    Galaxy.ExpandingObject.call(this);
	};

  Galaxy.Util.inherits(BigExplosion, Galaxy.ExpandingObject);

	BigExplosion.prototype.move = function () {
		if (this.dem > 640) {
			this.game.remove(this);
		} else {
			this.dem += 60;
			this.pos[0] -= 30;
			this.pos[1] -= 30;
		}
	};


 })();
