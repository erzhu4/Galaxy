(function () {

  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var ExpandingObject = Galaxy.ExpandingObject = function () {
  };

  ExpandingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.dem, this.dem);
  };

  ExpandingObject.prototype.isCollidedWith = function (obj) {
    return false;
  };


})();
