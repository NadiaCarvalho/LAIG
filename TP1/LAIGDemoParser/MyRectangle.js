/**
 * rectangle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function rectangle(scene, a, b, c, d, ampS, ampT) {
	CGFobject.call(this,scene);

	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;

	this.ampS = ampS;
	this.ampT = ampT;	

	this.initBuffers();
};

rectangle.prototype = Object.create(CGFobject.prototype);
rectangle.prototype.constructor=rectangle;

rectangle.prototype.initBuffers = function () {
	this.vertices = [
            this.a, this.b, 0,
            this.c, this.b, 0,
            this.a, this.d, 0,
            this.c, this.d, 0
			];

	this.indices = [
            0, 2, 1,
            1, 2, 3
        ];		

    this.normals = [
 	        0, 0, 1,
 	        0, 0, 1,
 	        0, 0, 1,
 	        0, 0, 1
 	    ];

 	this.texCoords = [
 			0, 1-(this.d-this.b)/this.ampT,
 			(this.c-this.a)/this.ampS, 1-(this.d-this.b)/this.ampT,
 			0, 1,
 			(this.c-this.a)/this.ampS, 1
 	];
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};