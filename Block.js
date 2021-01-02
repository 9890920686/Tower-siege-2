class Block {

constructor(x,y){

var options={'restitution': 0 ,'isStatic':false}

this.body=Bodies.rectangle(x,y,50,50,options)
World.add(world,this.body)



World.add(world,this.body)
}

display(){




var a = this.body.position.x
var b = this.body.position.y

fill("red");
rect(a,b,50,50)




}
       

}



