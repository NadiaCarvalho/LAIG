/**
* LinearAnimation
* @constructor
*/
function LinearAnimation(scene, object, controlPoints, velocity) extends Animation{
	super(scene, object);
	CGFobject.call(this, scene);

	this.controlPoints = controlPoints;
	this.velocity = velocity;
};

LinearAnimation.prototype = Object.create(CGFobject.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;


LinearAnimation.prototype.display = function() {

	
}