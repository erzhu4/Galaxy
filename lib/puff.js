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
    Galaxy.ExpandingObject.call(this);
	};

  Galaxy.Util.inherits(Puff, Galaxy.ExpandingObject);

	Puff.prototype.move = function () {
		if (this.dem > 60) {
			this.game.remove(this);
		} else {
			this.dem += 20;
			this.pos[0] -= 10;
			this.pos[1] -= 10;
		}
	};


 })();
