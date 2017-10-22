/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, xmlelem) {
    this.graph = graph;
    this.ampS;
    this.ampT;
    this.type = this.graph.reader.getItem(xmlelem, 'type', ['rectangle', 'cylinder', 'sphere', 'triangle']);
    this.args = this.graph.reader.getString(xmlelem, 'args');
    if(this.args == null)
        console.log("Error in args");
    else
        this.array = this.args.split(" ");
}

MyGraphLeaf.prototype = Object.create(CGFobject.prototype);
MyGraphLeaf.prototype.constructor = MyGraphLeaf;

MyGraphLeaf.prototype.display = function() {
    if(this.type == 'rectangle'){
        this.rect = new rectangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.ampS, this.ampT);
        this.rect.display();
    }
    else if(this.type == 'cylinder'){
        this.cylinder = new Cylinder(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4]);
        this.cylinder.display();
    }
    else if(this.type == 'triangle'){
        this.triangle = new triangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4], this.array[5], this.array[6], this.array[7], this.array[8], this.ampS, this.ampT);
        this.triangle.display();
    }
    else if(this.type == 'sphere'){
        this.sphere = new Sphere(this.graph.scene, this.array[0], this.array[1], this.array[2]);
        this.sphere.display();
    }
}

