/**
 * cylinder
 * @constructor
 */
 function cylinder(scene, height, botR, topR, stacks, slices, topCap, botCap) {
 	CGFobject.call(this,scene);
	
	this.scece = scene;
	this.height = height;
	this.botR = botR;
	this.topR = topR;
	this.stacks = stacks;
	this.slices = slices;
	this.topCap = topCap;
	this.botCap = botCap;

 	this.initBuffers();
 };

 cylinder.prototype = Object.create(CGFobject.prototype);
 cylinder.prototype.constructor = cylinder;

 cylinder.prototype.initBuffers = function() {

	var angle = 2*Math.PI/this.slices;
    this.vertices = [];
	this.indices = [];
	this.normals = [];

 	for(i = 0; i < this.slices; i++){
 	    this.vertices.push(this.botR * Math.cos(i*angle), this.botR * Math.sin(i*angle), 0);
 	    this.normals.push(i*(angle));
 	}

 	for(i = 1; i <= this.stacks; i++){
 		var radius = this.botR - i*((this.botR-this.topR)/this.stacks);

 		for(j = 0; j < this.slices; j++){
 			this.vertices.push(radius * Math.cos(j*angle), radius * Math.sin(j*angle), j*this.height/this.stacks);
 		}

 		for(j = 0; j < this.slices-1; j++){
			this.indices.push(i*this.slices+j+1, i*this.slices+j, j);
			this.indices.push(i*this.slices+j+1, j, j+1);
 		}
 		this.indices.push(i*this.slices, i*this.slices*2-1, i*this.slices-1);
    	this.indices.push(i*this.slices, i*this.slices-1, (i-1)*this.slices);

    	for(j = 0; j < this.slices; j++){
			this.normals.push(j*(angle));
 		}
 	}
 	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };