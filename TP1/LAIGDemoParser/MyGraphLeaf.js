/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, xmlelem) {
    this.graph = graph;
    this.ampS;
    this.ampT;
    this.type = this.graph.reader.getItem(xmlelem, 'type', ['rectangle', 'cylinder', 'sphere', 'triangle', 'patch']);
    this.args = this.graph.reader.getString(xmlelem, 'args');
    if(this.args == null)
        console.log("Error in args");
    else
        this.array = this.args.split(" ");

    this.obj;

    if(this.type == 'rectangle'){
        this.obj = new rectangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.ampS, this.ampT);
    }
    else if(this.type == 'cylinder'){
        this.obj = new Cylinder(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4]);
    }
    else if(this.type == 'triangle'){
        this.obj = new triangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4], this.array[5], this.array[6], this.array[7], this.array[8], this.ampS, this.ampT);
    }
    else if(this.type == 'sphere'){
        this.obj = new Sphere(this.graph.scene, this.array[0], this.array[1], this.array[2]);
    }
    else{
        console.log("Unknown Type");
    }
    /*else if(this.type =='patch'){
        this.obj = new MyPatch(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4]);
    }*/
}

MyGraphLeaf.prototype = Object.create(CGFobject.prototype);
MyGraphLeaf.prototype.constructor = MyGraphLeaf;

MyGraphLeaf.prototype.display = function(ampS, ampT) {
    if(ampS != this.ampS || ampT != this.ampT){
        this.ampS = ampS;
        this.ampT = ampT;
        if(this.type == 'rectangle'){
            this.obj = new rectangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.ampS, this.ampT);
        }
        else if(this.type == 'triangle'){
            this.obj = new triangle(this.graph.scene, this.array[0], this.array[1], this.array[2], this.array[3], this.array[4], this.array[5], this.array[6], this.array[7], this.array[8], this.ampS, this.ampT);
        }
    }

    this.obj.display();
}

