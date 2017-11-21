/**
* BezierAnimation
* @constructor
*/

function BezierAnimation(scene, controlPoints, velocity){
    var P1 = controlPoints[0], P2 = controlPoints[1], P3 = controlPoints[2], P4 = controlPoints[3],
        P12 = [(P2[0]-P1[0])/2, (P2[1]-P1[1])/2, (P2[2]-P1[2])/2], P23 = [(P3[0]-P2[0])/2, (P3[1]-P2[1])/2, (P3[2]-P2[2])/2],
        P123 = [(P23[0]-P12[0])/2, (P23[1]-P12[1])/2, (P23[2]-P12[2])/2],
        P34 = [(P4[0]-P3[0])/2, (P4[1]-P3[1])/2, (P4[2]-P3[2])/2],
        P234 = [(P34[0]-P23[0])/2, (P34[1]-P1[1])/2, (P2[2]-P1[2])/2];
    
    this.P1 = P1;
    this.P2 = P2;
    this.P3 = P3;
    this.P4 = P4;

    this.distance = Math.sqrt(Math.pow(P12[0]-P1[0], 2)+Math.pow(P12[1]-P1[1], 2)+Math.pow(P12[1]-P1[1], 2))+
                    Math.sqrt(Math.pow(P123[0]-P12[0], 2)+Math.pow(P123[1]-P12[1], 2)+Math.pow(P123[1]-P12[1], 2))+
                    Math.sqrt(Math.pow(P234[0]-P123[0], 2)+Math.pow(P234[1]-P123[1], 2)+Math.pow(P234[1]-P123[1], 2))+
                    Math.sqrt(Math.pow(P34[0]-P234[0], 2)+Math.pow(P34[1]-P234[1], 2)+Math.pow(P34[1]-P234[1], 2))+
                    Math.sqrt(Math.pow(P4[0]-P34[0], 2)+Math.pow(P4[1]-P34[1], 2)+Math.pow(P4[1]-P34[1], 2));
    console.log(this.distance);
    
    var date = new Date();
    this.initTime = date.getTime();
}

BezierAnimation.prototype = Object.create(CGFobject.prototype);
BezierAnimation.prototype.constructor = BezierAnimation;

BezierAnimation.prototype.getMatrix = function() {
    var date = new Date();
    var s = date.getTime() - this.initTime;
    var Q = (1-s)^3*this.P1+3*s*(1-s)^2*this.P2+3*s^2*(1-s)*this.P3+s^3*this.P4;
}