/**
 * MyCylinder * @constructor
 */
 function MyCylinder(scene, height, base, top, stacks, slices) {
 	CGFobject.call(this,scene);
	
	this.height = height;
	this.base = base;
	this.top = top;
	this.slices = slices;
	this.stacks = stacks;
 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords = [];

	var degToRad = Math.PI / 180.0;
	
	var ang = 360/this.slices;

	var parts = 1.0/this.stacks;

	var radiusRatio = (this.top - this.base) / this.stacks;

	for(var i = 0; i < this.slices; i++){
			this.vertices.push(this.base*Math.cos((ang*i)*degToRad),
								this.base*Math.sin((ang*i)*degToRad),
								0);
			this.normals.push(this.base*Math.cos(ang*i*degToRad),
								this.base*Math.sin(ang*i*degToRad),
								0);
			
			var t = 1 - (i / this.slices);
			this.texCoords.push(1, t);
	}
 	for(var j = 0; j < this.stacks; j++){
		var radius = this.base - (j+1)*radiusRatio;

 		for(i = 0; i < this.slices; i++){
			this.vertices.push(radius*Math.cos((ang*i)*degToRad),
								radius*Math.sin((ang*i)*degToRad),
								parts*(j+1)*this.height);

			var s = 1 - (j / this.stacks);
			var t = 1 - (i / this.slices);
			this.texCoords.push(s, t);
			
			if(i != this.slices-1){
				this.indices.push(j*this.slices+i,
								 1+(j*this.slices)+i,
								 (j+1)*this.slices+i);
				this.indices.push(1+(j+1)*this.slices+i,
								 (j+1)*this.slices+i,
								 1+(j*this.slices)+i);
			}
			else{
				this.indices.push(j*this.slices+i,
								 j*this.slices,
								 (j+1)*this.slices+i);
				this.indices.push((j+1)*this.slices,
								 (j+1)*this.slices+i,
								 j*this.slices);	
			}
				
			this.normals.push(radius*Math.cos(ang*i*degToRad),
								radius*Math.sin(ang*i*degToRad),
								0);
 		}
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };