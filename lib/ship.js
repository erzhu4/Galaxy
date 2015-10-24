(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var Ship = Galaxy.Ship = function (options) {
    var sprite = new Image();
    sprite.src = "./images/ship.gif";
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = "#999999";
    options.dem = 60;
    options.sprite = sprite;

    Galaxy.MovingObject.call(this, options);
  };

  Ship.RADIUS = 30;

  Galaxy.Util.inherits(Ship, Galaxy.MovingObject);

  Ship.prototype.fireBullet = function () {
    var bulletVel = [this.vel[0] / 2, -40];
    var bullet1 = new Galaxy.Bullet({
      pos: [this.pos[0] - 20, this.pos[1] - 5],
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    var bullet2 = new Galaxy.Bullet({
      pos: [this.pos[0] + 20, this.pos[1] - 5],
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet1);
    this.game.add(bullet2);
    this.game.addPuff([this.pos[0] - 24 + this.vel[0], this.pos[1] - 40]);
    this.game.addPuff([this.pos[0] + 16 + this.vel[0], this.pos[1] - 40]);
  };

  Ship.prototype.slowDown = function () {
    this.vel[0] = 0;
  };

  Ship.prototype.power = function (impulse) {
    var ship = this;
	ship.vel[0] = impulse[0] * 8;
  };

})();
