/**
 * triangle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function triangle(scene, x1, y1, z1, x2, y2, z2, x3, y3, z3, ampS, ampT) {
	CGFobject.call(this,scene);

	this.x1 = x1;
	this.y1 = y1;
	this.z1 = z1;

	this.x2 = x2;
	this.y2 = y2;
	this.z2 = z2;

	this.x3 = x3;
	this.y3 = y3;
	this.z3 = z3;

	this.ampS = ampS;
	this.ampT = ampT;

	this.initBuffers();
};

triangle.prototype = Object.create(CGFobject.prototype);
triangle.prototype.constructor=triangle;

triangle.prototype.initBuffers = function () {

	var a =  Math.sqrt(Math.pow((this.x1-this.x3), 2)
	   + Math.pow((this.y1-this.y3), 2)
	   + Math.pow((this.z1-this.z3), 2));
	var b =  Math.sqrt(Math.pow((this.x2-this.x1), 2)
	   + Math.pow((this.y2-this.y1), 2)
	   + Math.pow((this.z2-this.z1), 2));
	var c =  Math.sqrt(Math.pow((this.x3-this.x2), 2)
	   + Math.pow((this.y3-this.y2), 2)
	   + Math.pow((this.z3-this.z2), 2));

	var cos =(-1*Math.pow(b,2)+ 2*Math.pow(a, 2))/(2*a*c);
	var beta = Math.acos(cos);
	var sin = 1/cos;

	this.vertices = [
				this.x1, this.y1, this.z1,
				this.x2, this.y2, this.z2,
				this.x3, this.y3, this.z3
			];

	this.indices = [
            0, 1, 2
        ];
    this.texCoords = [
			0, 1,
			c/this.ampS, 1,
			(c-a*cos)/this.ampS, 1-(a*Math.sin(beta))/this.ampT
    ];
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};