/**
* LinearAnimation
* @constructor
*/

function LinearAnimation(scene, object, controlPoints, velocity){
	CGFobject.call(this, scene);
	this.scene = scene;
	this.object = object;
	var date = new Date();
	
	this.initialTime = date.getTime();
	this.lastTime = this.initialTime;
	this.timeNeeded = 0;

	if(controlPoints.length % 3 != 0)
		console.log("controlPoints is not a valid array");
	else
		this.controlPoints = controlPoints;

	this.posX = controlPoints[0];
	this.posY = controlPoints[1];
	this.posZ = controlPoints[2];

	if(velocity.length != 3)
		console.log("velocity is not a valid array");
	else{
		this.velocity = [];
		for(i = 0; i < 3; i++){
			this.velocity[i] = velocity[i]; //unit/milisecond
		}
	}
	this.trajectories = [];

	for(i = 0; i < this.controlPoints.length/3-1; i++){
		var distanceX = this.controlPoints[i+3]-this.controlPoints[i];
		var distanceY = this.controlPoints[i+4]-this.controlPoints[i+1];
		var distanceZ = this.controlPoints[i+5]-this.controlPoints[i+2];

		this.trajectories.push([distanceX, distanceY, distanceZ]);

		this.timeNeeded += Math.abs(distanceX/this.velocity[0]);
		console.log(this.timeNeeded);
	}
};

LinearAnimation.prototype = Object.create(CGFobject.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;


LinearAnimation.prototype.display = function() {

	var date = new Date();
	if((date.getTime() - this.initialTime) < this.timeNeeded*1000){
		var deltaTime = (date.getTime()-this.lastTime)/1000;

		var deltaX = this.velocity[0]*deltaTime;
		var deltaY = this.velocity[1]*deltaTime;
		var deltaZ = this.velocity[2]*deltaTime;

		this.posX += deltaX;
		this.posY += deltaY;
		this.posZ += deltaZ;

		this.scene.translate(this.posX, this.posY, this.posZ);

		this.lastTime = this.lastTime + deltaTime*1000;
	}

	this.scene.translate(this.posX, this.posY, this.posZ);
	this.object.display();
}