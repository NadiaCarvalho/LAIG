/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, xmlelem) {
    this.graph = graph;
    var type = this.graph.reader.getItem(xmlelem, 'type', ['rectangle', 'cylinder', 'sphere', 'triangle']);
    var args = this.graph.reader.getString(xmlelem, 'args');
    if(args == null)
        console.log("Error in args");
    else
        var array = args.split(" ");
    if(type == 'rectangle'){
        this.rect = new rectangle(this.graph.scene, 20, 20, -20, -20);
        this.rect.display();
    }
}

