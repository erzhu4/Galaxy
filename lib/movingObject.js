(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var MovingObject = Galaxy.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.dem = options.dem;
    this.sprite = options.sprite;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    ;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0] - this.dem /2, this.pos[1] - this.dem / 2, this.dem, this.dem);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var centerDist = Galaxy.Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  };

  MovingObject.prototype.remove = function () {
    this.game.remove(this);
  };
})();
