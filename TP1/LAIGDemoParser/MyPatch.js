function MyPatch(scene, id, degree1, degree2, controlvertexes, translation) {
	this.args=args;

	this.id = id;
	this.deg1 = degree1;
	this.deg2 = degree1;
	this.ctrlvertexes = controlvertexes;
	this.translation = translation;
	
	this.makeSurface(id,deg1,deg2,ctrlvertexes,translation);
			
};

MyPatch.prototype.getKnotsVector = function(degree) {
	
	var v = new Array();
	for (var i=0; i<=degree; i++) {
		v.push(0);
	}
	for (var i=0; i<=degree; i++) {
		v.push(1);
	}
	return v;  
}


MyPatch.prototype.makeSurface = function (id, deg1, deg2, ctrlvertexes, translation) {
		
	var knots1 = this.getKnotsVector(deg1); 
	var knots2 = this.getKnotsVector(deg2);
		
	var nurbsSurface = new CGFnurbsSurface(deg1, degree2, knots1, knots2, ctrlvertexes); // TODO  (CGF 0.19.3): remove knots1 and knots2 from CGFnurbsSurface method call. Calculate inside method.
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

	//var obj = new CGFnurbsObject(this, getSurfacePoint, 20, 20 );
	//this.surfaces.push(obj);
}      
    