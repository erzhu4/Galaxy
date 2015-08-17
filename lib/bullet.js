(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var Bullet = Galaxy.Bullet = function (options) {
	  this.game = options.game;
    var sprite = new Image();
    sprite.src = "./images/bullet.png";
    options.radius = Bullet.RADIUS;
    options.sprite = sprite;
    options.dem = 45;
    Galaxy.MovingObject.call(this, options);
  };

  Bullet.RADIUS = 2;


  Galaxy.Util.inherits(Bullet, Galaxy.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    this.game.addSpark(this.pos);
    if (otherObject instanceof Galaxy.Enemy) {
	    this.game.addExplosion(this.pos);
      this.remove();
      otherObject.remove();
      $(".galaxy-score").html(parseInt($(".galaxy-score").html()) + 1);
      if (parseInt($(".galaxy-score").html()) % 50 === 0) {
        this.game.addEnemies();
        this.game.addBigEnemy();
      }
    }

  	if (otherObject instanceof Galaxy.BigEnemy){
  		otherObject.hp -= 1;
  		this.remove();
  	}
  };

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0] - this.dem / 8, this.pos[1] - this.dem, this.dem / 4, this.dem);
  };

  Bullet.prototype.isWrappable = false;
})();
