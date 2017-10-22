function Sphere(scene, radius, slices, stacks) {
    CGFobject.call(this, scene);

    this.radius = radius;
    this.slices = slices;
    this.stacks = stacks;

    this.initBuffers();
};

Sphere.prototype = Object.create(CGFobject.prototype);
Sphere.prototype.constructor = Sphere;

Sphere.prototype.initBuffers = function() {

    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    this.vertices.push(0, 0, this.radius);
    this.normals.push(0, 0, this.radius);
    this.texCoords.push(1, 1);

    for (var stack = 1; stack <= this.stacks-1; stack++) {
        var theta = stack * Math.PI / this.stacks;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var slice = 0; slice < this.slices; slice++) {
            var phi = slice * 2 * Math.PI / this.slices;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            var x = this.radius * cosPhi * cosTheta;
            var y = this.radius * sinPhi * cosTheta;
            var z = this.radius * sinTheta;
            var s = 1 - (stack / this.stacks);
            var t = 1 - (slice / this.slices);

            this.vertices.push(x, y, z);
            this.normals.push(x, y, z);
            this.texCoords.push(s, t);
        }
    }

    this.vertices.push(0, 0, -this.radius);
    this.normals.push(0, 0, -this.radius);
    this.texCoords.push(0, 0);

    for (var stack = 0; stack < this.stacks; stack++) {
        for (var slice = 0; slice < this.slices-1; slice++) {
            if(stack == 0){
                this.indices.push(0, slice+1, slice+2);
            }
            else if(stack == this.stacks-1){
                var last = 1+this.slices*(this.stacks-1);
                this.indices.push(last, last-1-slice, last-2-slice);
            }
            else{
                this.indices.push((stack-1)*this.slices+slice+1,
								 1+(stack*this.slices)+slice,
								 (stack-1)*this.slices+slice+2);
				this.indices.push((stack-1)*this.slices+slice+2,
								 1+(stack*this.slices)+slice,
								 2+(stack*this.slices)+slice);
            }
        }
        if(stack == 0){
            this.indices.push(0, this.slices, 1);
        }
        else if(stack == this.stacks-1){
            var last = 1+this.slices*(this.stacks-1);
            this.indices.push(last, last-this.slices, last-1);
        }
        else {
        	this.indices.push(stack*this.slices,
        					(stack+1)*this.slices,
        					(stack-1)*this.slices+1);
        	this.indices.push((stack-1)*this.slices+1,
        					(stack+1)*this.slices,
        					stack*this.slices+1);
        }
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
};