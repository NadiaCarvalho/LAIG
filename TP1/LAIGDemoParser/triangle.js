/**
 * triangle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function triangle(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

triangle.prototype = Object.create(CGFobject.prototype);
triangle.prototype.constructor=triangle;

triangle.prototype.initBuffers = function () {
	this.vertices = [
            0.5, -0.5, 0,
            -0.5, 0, 0,
            0.5, 0.5, 0
			];

	this.indices = [
            0, 1, 2
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};