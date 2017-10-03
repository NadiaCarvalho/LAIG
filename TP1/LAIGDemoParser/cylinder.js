/**
 * cylinder
 * @constructor
 */
 function cylinder(scene, h, br, tr, sections, parts) {
 	CGFobject.call(this,scene);
	
	this.scece = scene;
	this.h = h;
	this.br = br;
	this.tr = tr;
	this.section = sections;
	this.parts = parts;

 	this.initBuffers();
 };

 cylinder.prototype = Object.create(CGFobject.prototype);
 cylinder.prototype.constructor = cylinder;

 cylinder.prototype.initBuffers = function() {

    this.vertices = [];

 	for(i = 0; i < this.sections; i++){
 	    var angle = i*(2*Math.PI/this.slices);
 	    this.vertices.push(Math.cos(angle), Math.sin(angle), 0.5);
 	    this.vertices.push(Math.cos(angle), Math.sin(angle), -0.5);
 	}

    this.indices = [];

 	for(i = 0; i < this.slices-1; i++){
        this.indices.push(0+i*2, 2+i*2, 1+i*2);
        this.indices.push(3+i*2, 1+i*2, 2+i*2);
 	}

 	this.indices.push(this.slices-1, 0, this.slices);
    this.indices.push(1, this.slices, 0);

 	this.normals = [];

 	for(i = 0; i < this.slices; i++){
 	    this.normals.push(i*(2*Math.PI/this.slices));
 	    this.normals.push(i*(2*Math.PI/this.slices));
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };