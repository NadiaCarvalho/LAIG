/**
* CircularAnimation
* @constructor
*/
function CircularAnimation(scene, radius, angInit, angRot, velocity, center){
	CGFobject.call(this,scene);

	degToRad = Math.PI /180;

	this.radius=radius;
	this.velocity=velocity;
	this.center=center
	this.angInit=angInit*degToRad;
	this.angRot=angRot*degToRad;

	var date = new Date;
	this.initialTime = date.getTime();
	this.lastTime = initialTime;
	this.timeNeeded = 0;

	var w = this.velocity / this.radius;

	this.timeNeeded = 2 * Math.PI * this.radius;

};

CircularAnimation.prototype = Object.create(CGFobject.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;


CircularAnimation.prototype.display = function() {

	if((date.getTime()-this.initialTime)< this.timeNeeded*1000){
		var deltaTime = (date.getTime()-this.initialTime)/1000;

		var delta = this.angInit + w * deltaTime;

		this.rotate(90, 0, 1, 0);
		this.translate(this.radius, 0 , 0);
		this.rotate(delta, 0, 1, 0);
		this.translate(this.center[0], this.center[1], this.center[2]);

		this.lastTime=date.getTime();
	}
}
